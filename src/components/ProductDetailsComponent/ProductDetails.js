import { View, Text, TextInput, Button, Alert, InteractionManager } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { getProductOrNull, writeDataToUser } from '../../helpers/firebaseHelpers'
import { useFocusEffect } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/auth'

const barcodeObject = (data, dataRaw, format, type) => {
  return {
    'data': data || null,
    'dataRaw': dataRaw || null,
    'format': format || null,
    'type': type || null,
  }
}

const ProductDetails = ({ route, navigation }) => {
  const style = ProductDetailsStyle
  const { uid } = firebase.auth().currentUser
  const [productCodeData, setProductCodeData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSearchDisable, setIsSearchDisabled] = useState(false)

  const [product, setProduct] = useState({})
  const [isInitialView, setIsInitialView] = useState(true)

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        if (!route.params?.barcodeData) return
        const { data, dataRaw, format, type } = route.params.barcodeData
        const obj = barcodeObject(data, dataRaw, format, type)
        setProductCodeData(obj)
        setIsSearchDisabled(false)
        getProduct(obj)
      })

      return () =>
        setTimeout(() => {
          resetScreen(task)
        }, 1000)
    }, [route.params?.barcodeData]),
  )

  useEffect(() => {
    if (!route.params?.productDetailsCallback) return

    const { data, format } = route.params.productDetailsCallback
    const obj = barcodeObject(data, data, format, null)
    setIsLoading(true)
    setIsInitialView(false)

    setTimeout(() => {
      setProductCodeData(obj)
      getProduct(obj)
    }, 1000)
  }, [route.params?.productDetailsCallback])

  const resetScreen = (task) => {
    route.params = null
    setIsInitialView(true)
    setIsLoading(false)
    setProductCodeData(barcodeObject())
    task.cancel()
  }

  useEffect(() => {
    productCodeData.data === null ? setIsSearchDisabled(true) : setIsSearchDisabled(false)
  }, [productCodeData.data])

  const handleSearchButton = () => {
    if (productCodeData.data === null) return
    getProduct(productCodeData)
  }

  const handleResetProductsView = () => {
    setProductCodeData(barcodeObject())
    setIsInitialView(true)
  }
  const handleAddNewItemScreen = (barcode) => {
    Alert.alert('', 'This product doesnt exist! Would u like to add?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => navigation.navigate('ProductAdd', { barcode }) },
    ])
    return true
  }

  const getProduct = async (barcode) => {
    setIsLoading(true)
    await getProductOrNull(barcode.data)
      .then((res) => {
        if (res.val() !== null) {
          setProduct(res.val())
          writeDataToUser(uid, res.val())
          setIsInitialView(false)
        } else {
          setIsInitialView(true)
          handleAddNewItemScreen(barcode)
          return
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <View style={style.screenContainer}>
      <View style={style.searchContainer}>
        <View style={style.searchInput}>
          <TextInput
            keyboardType='numeric'
            onChangeText={(val) => setProductCodeData(barcodeObject(val.replace(/[^0-9]/g, '')))}
            value={productCodeData.data}
          />
        </View>
        <Button
          disabled={isSearchDisable}
          onPress={() => handleSearchButton()}
          style={style.searchButton}
          title='Search 🔍'
        />
        <Button
          onPress={() => handleResetProductsView()}
          style={style.searchButton}
          title='Reset'
        />
      </View>
      {isInitialView ? (
        <Text> Initial View </Text>
      ) : (
        <View>
          {isLoading ? (
            <Text>Loading</Text>
          ) : (
            <View>
              {Object.entries(product).map((v, id) => {
                if (typeof v[1] === 'object') {
                  Object.entries(v[1]).map((y) => <Text key={id}>{y}</Text>)
                } else {
                  return <Text key={id}>{v[1]}</Text>
                }
              })}
            </View>
          )}
        </View>
      )}
    </View>
  )
}
export default ProductDetails

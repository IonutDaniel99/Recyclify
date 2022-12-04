import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { getProductOrNull, writeDataToUser } from '../../helpers/firebaseHelpers'
import { barcodeMockData } from '../../mocks/mocks'
import { useFocusEffect } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/auth'

const ProductDetails = ({ route, navigation }) => {
  const style = ProductDetailsStyle
  const { uid } = firebase.auth().currentUser
  const [productCodeNumber, setProductCodeNumber] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSearchDisable, setIsSearchDisabled] = useState(false)

  const [product, setProduct] = useState({})
  const [isInitialView, setIsInitialView] = useState(true)

  useFocusEffect(
    React.useCallback(() => {
      if (!route.params) return
      const { data, dataRaw, format, type } = route.params?.barcodeData
      setProductCodeNumber(dataRaw)
      setIsSearchDisabled(false)
      getProduct(dataRaw)
      return () => setProductCodeNumber('')
    }, [route.params?.barcodeData]),
  )

  useEffect(() => {
    productCodeNumber === '' ? setIsSearchDisabled(true) : setIsSearchDisabled(false)
  }, [productCodeNumber])

  const handleSearchButton = () => {
    if (productCodeNumber === '') return
    getProduct(productCodeNumber)
  }

  const handleResetProductsView = () => {
    setProductCodeNumber('')
    setIsInitialView(true)
  }
  const handleAddNewItemScreen = () => {
    Alert.alert('', 'This product doesnt exist! Would u like to add?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => navigation.navigate('ProductAdd', { barcode: productCodeNumber }) },
    ])
    return true
  }

  const getProduct = async (barcode) => {
    setIsLoading(true)
    await getProductOrNull(barcode)
      .then((res) => {
        if (res.val() !== null) {
          setProduct(res.val())
          writeDataToUser(uid, res.val())
        } else {
          handleAddNewItemScreen()
          setIsInitialView(true)
          return
        }
      })
      .finally(() => {
        setIsInitialView(false)
        setIsLoading(false)
      })
  }

  return (
    <View style={style.screenContainer}>
      <View style={style.searchContainer}>
        <View style={style.searchInput}>
          <TextInput
            onChangeText={(val) => setProductCodeNumber(val.replace(/[^0-9]/g, ''))}
            value={productCodeNumber}
            keyboardType='numeric'
          />
        </View>
        <Button
          title='Search 🔍'
          style={style.searchButton}
          onPress={() => handleSearchButton()}
          disabled={isSearchDisable}
        />
        <Button
          title='Reset'
          style={style.searchButton}
          onPress={() => handleResetProductsView()}
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

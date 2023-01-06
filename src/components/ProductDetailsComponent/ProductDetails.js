import { View, Text, TextInput, Alert, InteractionManager, ScrollView, TouchableOpacity, Keyboard, Dimensions } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { getCurrentUserStatistics, getProductOrNull, writeDataToUser } from '../../helpers/firebaseHelpers'
import { useFocusEffect } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/auth'

import Icon from 'react-native-vector-icons/Fontisto'
import ProductCard from './ProductCard/ProductCard'
import ScannedCard from './ProductCard/ScannedCard'
import LoadingContainer from '../../common/LoadingContainer'

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
  const [userInfo, setUserInfo] = useState({})
  const [isInitialView, setIsInitialView] = useState(true)

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        getUserDataPromise

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
    getUserDataPromise

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
    Keyboard.dismiss()
    route.params = null
    setIsInitialView(true)
    setIsLoading(false)
    setProductCodeData(barcodeObject())
    task.cancel()
  }

  useEffect(() => {
    const regexTest = !/^[0-9]+$/.test(productCodeData.data)
    productCodeData.data === null || regexTest ? setIsSearchDisabled(true) : setIsSearchDisabled(false)
  }, [productCodeData.data])

  const handleSearchButton = () => {
    Keyboard.dismiss()
    if (productCodeData.data === null) return
    setIsInitialView(false)
    getProduct(productCodeData)
  }

  const handleResetProductsView = () => {
    Keyboard.dismiss()
    getUserDataPromise
    setProductCodeData(barcodeObject())
    setIsInitialView(true)
  }
  const handleAddNewItemScreen = (barcode) => {
    Alert.alert('', 'This product doesnt exist! Would you like to add?', [
      {
        text: 'Cancel',
        onPress: () => {
          Keyboard.dismiss()
          getUserDataPromise
          setIsInitialView(true)
        },
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
          getUserDataPromise
          handleAddNewItemScreen(barcode)
          setIsInitialView(true)
          return
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const getUserDataPromise = useMemo(
    () =>
      getCurrentUserStatistics(uid)
        .then((data) => {
          const { latestProductsScanned } = data.val()
          setUserInfo(latestProductsScanned)
        })
        .then(() => setIsLoading(false))
        .catch((e) => console.log(e)),
    [isInitialView],
  )

  const cardItems = Object.entries(userInfo)
    .filter((item) => item[1] !== 0 && item[1] !== null)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  return (
    <View style={style.screenContainer}>
      <View style={style.searchContainer}>
        <View style={style.searchInput}>
          <TextInput
            autoFocus={false}
            clearButtonMode='never'
            keyboardType='number-pad'
            onChangeText={(val) => setProductCodeData(barcodeObject(val))}
            onSubmitEditing={productCodeData.data ? () => handleSearchButton() : false}
            placeholder='Search'
            placeholderTextColor={'#000'}
            returnKeyType='search'
            style={{
              textAlignVertical: 'center',
              height: 40,
              color: '#000',
            }}
            value={productCodeData.data}
          />
          <TouchableOpacity
            onPress={() => handleResetProductsView()}
            style={style.resetButtonTouchable}
            title='Reset'
          >
            <Text style={style.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={isSearchDisable}
          onPress={() => handleSearchButton()}
          style={!isSearchDisable ? style.searchButtonTouchable : style.searchButtonTouchableDisable}
        >
          <Icon
            color={'#fff'}
            name='search'
            size={22}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: Dimensions.get('screen').height * 0.9,
          marginTop: 30,
        }}
      >
        {isInitialView ? (
          <View style={style.initialViewContainer}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={style.latestScannedProductsText}
            >
              Latest scanned products
            </Text>
            <ScrollView
              horizontal
              style={style.latestScannedProductsScrollView}
            >
              {cardItems &&
                cardItems.map((item, id) => {
                  return (
                    <ProductCard
                      key={id}
                      productItem={item}
                    />
                  )
                })}
            </ScrollView>
          </View>
        ) : (
          <>
            {isLoading ? (
              <View style={style.productCardContainerLoading}>
                <LoadingContainer />
              </View>
            ) : (
              <View style={style.initialViewContainer}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={style.latestScannedProductsText}
                >
                  Barcode: {product.barCode}
                </Text>
                <ScrollView
                  horizontal
                  style={style.latestScannedProductsScrollView}
                >
                  <ScannedCard productItem={product} />
                </ScrollView>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  )
}
export default ProductDetails

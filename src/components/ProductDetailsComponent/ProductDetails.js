import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { getProductOrNull, writeDataToUser } from '../../helpers/firebaseHelpers'
import { barcodeMockData } from '../../mocks/mocks'
import { useFocusEffect } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/auth'

const ProductDetails = ({ route }) => {
  const style = ProductDetailsStyle
  const { uid } = firebase.auth().currentUser
  const [productCodeNumber, setProductCodeNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [product, setProduct] = useState('')
  const [isInitialView, setIsInitialView] = useState(true)

  useFocusEffect(
    React.useCallback(() => {
      if (!route.params) return
      const { data, dataRaw, format, type } = route.params?.barcodeData
      setProductCodeNumber(dataRaw)
      getProductFromFirebase(dataRaw)
      return () => {
        console.log('d', product)
        setProductCodeNumber('')
        setProduct('')
        route.params = undefined
      }
    }, [route.params]),
  )

  useEffect(() => {
    if (!productCodeNumber) return
    getProductFromFirebase()
  }, [])

  const getProductFromFirebase = async (barcodeNumber) => {
    setIsInitialView(false)
    setIsLoading(true)
    await getProductOrNull(productCodeNumber || barcodeNumber)
      .then((res) => {
        if (res.val() !== null) {
          setProduct(res.val())
          writeDataToUser(uid, res.val())
        } else {
          setProduct({ prodName: 'Produsul nu exista' })
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
            onChangeText={(val) => setProductCodeNumber(val.replace(/[^0-9]/g, ''))}
            value={productCodeNumber}
            keyboardType='numeric'
          />
        </View>
        <Button
          title='Search 🔍'
          style={style.searchButton}
          onPress={() => getProductFromFirebase()}
        />
      </View>
      {isInitialView ? (
        <Text> Initial View </Text>
      ) : (
        <View>{isLoading ? <Text>Loading</Text> : <Text>Data: {product.prodName ? 'da' : 'nu'}</Text>}</View>
      )}
    </View>
  )
}
export default ProductDetails

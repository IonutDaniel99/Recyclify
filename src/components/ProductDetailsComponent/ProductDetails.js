import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { getProductOrNull } from '../../configs/firebase/firebaseHelpers'

const ProductDetails = ({ route }) => {
  const style = ProductDetailsStyle
  const { data, dataRaw, format, type } = route.params.barcodeData

  const [productCodeNumber, setProductCodeNumber] = useState(null || dataRaw)
  const [isLoading, setIsLoading] = useState(true)

  const [text, setText] = useState('')
  const [isInitialView, setIsInitialView] = useState(true)

  useEffect(() => {
    if (!productCodeNumber) return
    getProduct()
  }, [])

  const getProduct = async () => {
    setIsInitialView(false)
    setIsLoading(true)
    await getProductOrNull(productCodeNumber)
      .then((res) => (res.val() !== null ? setText(res.val()) : setText('Produsul nu exista')))
      .finally(() => setIsLoading(false))
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
          onPress={() => getProduct()}
        />
      </View>
      {isInitialView ? <Text> Initial View </Text> : <View>{isLoading ? <Text>Loading</Text> : <Text>Data: {text}</Text>}</View>}
    </View>
  )
}
export default ProductDetails

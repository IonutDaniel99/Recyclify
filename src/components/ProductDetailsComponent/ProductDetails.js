import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { getAllDb, getProductOrNull } from '../../configs/firebase/firebaseHelpers'

const ProductDetails = ({ route }) => {
  const style = ProductDetailsStyle
  const { data, dataRaw, format, type } = route.params.barcodeData
  const [number, onChangeNumber] = useState(null || dataRaw)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!number) return
    getProduct()
  }, [])

  const getProduct = async () => {
    await getProductOrNull(number).then((res) => (res.val() !== null ? setText(res.val()) : setText('error')))
  }

  return (
    <View style={style.screenContainer}>
      <View style={style.searchContainer}>
        <View style={style.searchInput}>
          <TextInput onChangeText={(val) => onChangeNumber(val.replace(/[^0-9]/g, ''))} value={number} keyboardType='numeric' />
        </View>
        <Button title='Search 🔍' style={style.searchButton} onPress={() => getProduct()} />
      </View>

      <View>
        <Text>Data: {text}</Text>
      </View>
    </View>
  )
}
export default ProductDetails

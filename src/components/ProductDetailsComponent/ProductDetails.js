import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { barcodeMockData } from '../../mocks/mocks'

const ProductDetails = ({ route }) => {
  // const { data, dataRaw, format, type } = route.params.barcodeData
  const { data, dataRaw, format, type } = barcodeMockData
  const [number, onChangeNumber] = React.useState(data)
  const style = ProductDetailsStyle
  return (
    <View style={style.screenContainer}>
      <View style={style.searchContainer}>
        <View style={style.searchInput}>
          <TextInput
            onChangeText={(val) => onChangeNumber(val.replace(/[^0-9]/g, ''))}
            value={number}
            keyboardType='numeric'
          />
        </View>
        <View style={style.searchButton}>
          <Text>Search 🔍</Text>
        </View>
      </View>
    </View>
  )
}
export default ProductDetails

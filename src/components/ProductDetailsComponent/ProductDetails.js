import { View, Text } from 'react-native'
import React from 'react'

const ProductDetails = ({ route }) => {
  const { data, dataRaw, format, type } = route.params.barcodeData
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Text style={{ fontSize: 20, color: 'black' }}>barcode: {data}</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>dataRaw: {dataRaw}</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>format: {format}</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>type: {type}</Text>
    </View>
  )
}
export default ProductDetails

import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const ProductDetails = ({ route }) => {
  const tw = useTailwind()
  const { data, dataRaw, format, type } = route.params.barcodeData
  return (
    <View style={tw('flex justify-center items-center w-full h-full')}>
      <Text style={{ fontSize: 20, color: 'black' }}>barcode: {data}</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>dataRaw: {dataRaw}</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>format: {format}</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>type: {type}</Text>
    </View>
  )
}

export default ProductDetails

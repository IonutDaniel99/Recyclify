import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const ProductDetails = ({ route }) => {
  const tw = useTailwind()
  const { text } = route.params

  console.log(route)
  return (
    <View style={tw('flex justify-center items-center w-full h-full')}>
      <Text style={{ fontSize: 20, color: 'black' }}>{text}</Text>
    </View>
  )
}

export default ProductDetails

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductDetailsStyle } from './ProductDetailsStyle'
import { random } from 'lodash'
import DropShadow from 'react-native-drop-shadow'
import { getCurrentUserLatestProducts, getCurrentUserStatistics, getProductOrNull, writeDataToUser } from '../../helpers/firebaseHelpers'

const ProductCard = ({ productItem }) => {
  const style = ProductDetailsStyle

  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    setIsLoading(true)
    await getProductOrNull(productItem[0])
      .then((res) => {
        if (res.val() !== null) {
          setProduct(res.val())
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const parseDate = (unixTime) => {
    console.log(new Date().getSeconds())
    const dater = new Date(unixTime)
    return `${dater}`
  }

  return (
    <DropShadow style={style.shadowProp}>
      <View style={style.productCardContainer}>
        {isLoading ? (
          <>
            <Text>Loading</Text>
          </>
        ) : (
          <>
            <Text>{parseDate(productItem[1])}</Text>
            <Text>{product.productName}</Text>
          </>
        )}
      </View>
    </DropShadow>
  )
}

export default ProductCard

import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import { getProductOrNull } from '../../../helpers/firebaseHelpers'

import PlasticBottleProp from '../../../assets/images/LatestProducts/Plastic/PlasticBottle.png'
import { ProductCardStyle } from './ProductCardStyle'
import { FlatGrid } from 'react-native-super-grid'

const ecoMapper = {
  ewaste: {
    text: 'E-Waste',
    bgColor: '#DFE5EC',
  },
  plastic: {
    text: 'Plastic',
    bgColor: '#DCE8EF',
  },
  metal: {
    text: 'Metal',
    bgColor: '#F7F4FA',
  },
  glass: {
    text: 'Glass',
    bgColor: '#DCEBEF',
  },
  paper: {
    text: 'Paper',
    bgColor: '#DCEFE4',
  },
  organic: {
    text: 'Organic',
    bgColor: '#FAE4D1',
  },
}

const ProductCard = ({ productItem }) => {
  const style = ProductCardStyle

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
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dater = new Date(unixTime)
    const day = dater.getDate()
    const month = dater.getMonth()
    const year = dater.getFullYear()
    const hour = dater.getHours()
    const minutes = dater.getMinutes() < 10 ? '0' + dater.getMinutes() : dater.getMinutes()
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dater.getDay()]
    const monthName = months[month - 1]
    const _stringDate = `    ${weekday} ${day}/${monthName}/${year}   ${hour}:${minutes}`
    return _stringDate
  }

  return (
    <DropShadow style={style.shadowProp}>
      {isLoading ? (
        <>
          <Text>Loading</Text>
        </>
      ) : (
        <View style={[ProductCardStyle.productCardContainer, { backgroundColor: '#F7F4FA' || ecoMapper[product.ecoType].bgColor }]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={style.nameCompanyPropContainer}>
              <View style={style.nameCompanyContainer}>
                <Text
                  numberOfLines={2}
                  style={style.productNameText}
                >
                  {product.productName}
                </Text>
                <View>
                  <Text style={style.companyNamePH}>Company Name:</Text>
                  <Text style={style.companyName}>{product.productName}</Text>
                </View>
              </View>
              <Image
                source={PlasticBottleProp}
                style={{
                  height: 120,
                  width: 120,
                }}
              />
            </View>
            <View style={style.ecoTypeContainer}>{/* <Text style={style.ecoTypeText}>{ecoMapper[product.ecoType].text}</Text> */}</View>

            <View style={style.descriptionContainer}>
              <Text style={style.descriptionText}>Description</Text>
              <View style={style.descriptionContent}>
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={7}
                  style={style.descriptionLongText}
                >
                  {product?.description}
                </Text>
                <View style={[ProductCardStyle.CirclePositioning, { top: '45%' }]} />
              </View>
            </View>

            {!product.ingredients && ( //TODO: Repair Here
              <View style={style.descriptionContainer}>
                <Text style={style.descriptionText}>Ingredients</Text>
                <View style={style.ingredientContent}>
                  {product.ingredients && (
                    <>
                      <FlatGrid
                        data={product.ingredients}
                        disableVirtualization
                        horizontal={false}
                        key={product.length * Math.random()}
                        maxItemsPerRow={2}
                        renderItem={({ item, index }) => (
                          <View
                            key={index}
                            style={style.ingredientContainer}
                          >
                            <Text style={style.ingredientText}>{item}</Text>
                          </View>
                        )}
                        spacing={12}
                      />
                      <View style={[ProductCardStyle.CirclePositioning, { top: '45%' }]} />
                    </>
                  )}
                </View>
              </View>
            )}
            {product.nutritionalValues && (
              <View style={style.nutritionalContainer}>
                <Text style={style.descriptionText}>Nutritional Values</Text>
                <View style={style.nutritionalContent}>
                  <Text>{product.description}</Text>
                  <View style={[ProductCardStyle.CirclePositioning, { top: '45%' }]} />
                </View>
              </View>
            )}
            <View style={style.scannedAtContainer}>
              <View style={style.scannedAtContent}>
                <Text style={style.scanndedAtDate}>Scanned At {parseDate(productItem[1])}</Text>
                <View style={[ProductCardStyle.CirclePositioning, { top: '35%' }]} />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </DropShadow>
  )
}

export default ProductCard

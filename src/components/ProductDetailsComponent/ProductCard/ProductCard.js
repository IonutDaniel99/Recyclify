import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import { getProductOrNull } from '../../../helpers/firebaseHelpers'

import PlasticBottleProp from '../../../assets/images/LatestProducts/Plastic/PlasticBottle.png'
import { ProductCardStyle } from './ProductCardStyle'
import { FlatGrid } from 'react-native-super-grid'
import { PlasticProcessView } from '../ProcessCard/PlasticProcessView'
import { PaperProcessView } from '../ProcessCard/PaperProcessView'
import { MetalProcessView } from '../ProcessCard/MetalProcessView'
import { EWasteProcessView } from '../ProcessCard/EWasteProcessView'
import { GlassProcessView } from '../ProcessCard/GlassProcessView'
import { OrganicProcessView } from '../ProcessCard/OrganicProcessView'
import { delay } from 'lodash'

const ecoMapper = {
  ewaste: {
    text: 'E-Waste',
    scannedAtBg: '#6F8AA9',
    bgColor: '#DFE5EC',
  },
  plastic: {
    text: 'Plastic',
    scannedAtBg: '#6198B7',
    bgColor: '#DCE8EF',
  },
  metal: {
    text: 'Metal',
    scannedAtBg: '#8C61B7',
    bgColor: '#F7F4FA',
  },
  glass: {
    text: 'Glass',
    scannedAtBg: '#62A5B7',
    bgColor: '#DCEBEF',
  },
  paper: {
    text: 'Paper',
    scannedAtBg: '#61B785',
    bgColor: '#DCEFE4',
  },
  organic: {
    text: 'Organic',
    scannedAtBg: '#E88731',
    bgColor: '#FAE4D1',
  },
}

const ProductCard = ({ productItem }) => {
  const style = ProductCardStyle

  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState(undefined)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    await getProductOrNull(productItem[0])
      .then((res) => {
        if (res.val() !== null) {
          setProduct(res.val())
        }
      })
      .finally(() => {
        delay(() => setIsLoading(false), 1000)
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
        <View style={[ProductCardStyle.productCardContainer, { backgroundColor: ecoMapper[product.ecoType].bgColor }]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ padding: 20 }}
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
                  <Text style={style.companyName}>{product.companyName}</Text>
                </View>
              </View>
              <View style={style.ImageTypeProp}>
                <Image
                  source={PlasticBottleProp}
                  style={{
                    height: 100,
                    width: 100,
                  }}
                />
              </View>
            </View>
            <View style={style.ecoTypeContainer}>
              <Text style={style.ecoTypeText}>{ecoMapper[product.ecoType].text}</Text>
            </View>

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
                <View style={[ProductCardStyle.CirclePositioning, { top: '45%', right: '-12%' }]} />
              </View>
            </View>

            {product.ingredients && (
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
                      <View style={[ProductCardStyle.CirclePositioning, { top: '45%', right: '-11.5%' }]} />
                    </>
                  )}
                </View>
              </View>
            )}
            {product.nutritionalValues && (
              <View style={style.nutritionalContainer}>
                <Text style={style.descriptionText}>Nutritional Values</Text>
                <View style={style.nutritionalContent}>
                  <Text>Total Fat</Text>
                  <Text>Saturated Fat</Text>
                  <Text>Cholesterol Fat</Text>
                  <Text>Sodium Fat</Text>
                  <Text>Total Carbohydrate Fat</Text>
                  <Text>Protein Fat</Text>
                  <View
                    style={[
                      ProductCardStyle.CirclePositioning,
                      {
                        top: '50%',
                        right: '-13%',
                      },
                    ]}
                  />
                </View>
              </View>
            )}
            <View style={style.scannedAtContainer}>
              <View style={style.scannedAtContent}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={[style.scanndedAtDate, { backgroundColor: ecoMapper[product.ecoType].scannedAtBg }]}
                >
                  Scanned At {parseDate(productItem[1])}
                </Text>
                <View style={[ProductCardStyle.CirclePositioning, { top: '35%', right: '-11.5%' }]} />
              </View>
            </View>
            {product.ecoType === 'plastic' && <PlasticProcessView bgColor={'#DCE8EF'} />}
            {product.ecoType === 'paper' && <PaperProcessView bgColor={'#DCEFE4'} />}
            {product.ecoType === 'metal' && <MetalProcessView bgColor={'#F7F4FA'} />}
            {product.ecoType === 'ewaste' && <EWasteProcessView bgColor={'#DFE5EC'} />}
            {product.ecoType === 'glass' && <GlassProcessView bgColor={'#DCEBEF'} />}
            {product.ecoType === 'organic' && <OrganicProcessView bgColor={'#FAE4D1'} />}
            {/* LINES */}
            <View
              style={{
                position: 'absolute',
                minHeight: 1600,
                minWidth: '100%',
                top: 135,
                left: 15,
                zIndex: 10,
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  borderColor: '#232323',
                  borderRightWidth: 2,
                  height: 10,
                  right: 62,
                  top: 0,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  borderColor: '#232323',
                  borderBottomWidth: 2,
                  width: 40,
                  right: 22,
                  top: 8,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  borderColor: '#232323',
                  borderRightWidth: 2,
                  height: '90%',
                  right: '7.5%',
                  top: 8,
                  zIndex: -10,
                }}
              />
            </View>
            {/* END LINES */}
          </ScrollView>
        </View>
      )}
    </DropShadow>
  )
}

export default ProductCard

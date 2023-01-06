/* eslint-disable react-native/no-raw-text */
import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'

import PlasticBottleDirtyProp from '../../../assets/images/LatestProducts/Plastic/PlasticBottleDirty.png'
import FruitProp from '../../../assets/images/LatestProducts/Organic/fruit.png'
import PaperProp from '../../../assets/images/LatestProducts/Paper/paper.png'
import GlassProp from '../../../assets/images/LatestProducts/Glass/bottle.png'
import MetalProp from '../../../assets/images/LatestProducts/Metal/can.png'
import CompProp from '../../../assets/images/LatestProducts/EWaste/comp.png'

import { ProductCardStyle } from './ProductCardStyle'
import { FlatGrid } from 'react-native-super-grid'
import { PlasticProcessView } from '../ProcessCard/PlasticProcessView'
import { PaperProcessView } from '../ProcessCard/PaperProcessView'
import { MetalProcessView } from '../ProcessCard/MetalProcessView'
import { EWasteProcessView } from '../ProcessCard/EWasteProcessView'
import { GlassProcessView } from '../ProcessCard/GlassProcessView'
import { OrganicProcessView } from '../ProcessCard/OrganicProcessView'
import { NutritionalValueViewer } from './NutritionalValueViewer'

const ecoMapper = {
  ewaste: {
    text: 'E-Waste',
    scannedAtBg: '#6F8AA9',
    bgColor: '#DFE5EC',
    image: CompProp,
  },
  plastic: {
    text: 'Plastic',
    scannedAtBg: '#6198B7',
    bgColor: '#DCE8EF',
    image: PlasticBottleDirtyProp,
  },
  metal: {
    text: 'Metal',
    scannedAtBg: '#8C61B7',
    bgColor: '#F7F4FA',
    image: MetalProp,
  },
  glass: {
    text: 'Glass',
    scannedAtBg: '#62A5B7',
    bgColor: '#DCEBEF',
    image: GlassProp,
  },
  paper: {
    text: 'Paper',
    scannedAtBg: '#61B785',
    bgColor: '#DCEFE4',
    image: PaperProp,
  },
  organic: {
    text: 'Organic',
    scannedAtBg: '#E88731',
    bgColor: '#FAE4D1',
    image: FruitProp,
  },
}
const nutritionalSortMapper = [
  'energeticValue',
  'totalFat',
  'saturatedFat',
  'transFat',
  'polyFat',
  'monoFat',
  'cholesterol',
  'sodium',
  'totalCarbohydrate',
  'dietaryFiber',
  'sugar',
  'protein',
  'fiber',
  'salt',
]
const ScannedCard = ({ productItem }) => {
  const style = ProductCardStyle

  const [product] = useState(productItem)

  const parseDate = (unixTime) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dater = new Date(unixTime)
    const day = dater.getDate()
    const month = dater.getMonth() + 1
    const year = dater.getFullYear()
    const hour = dater.getHours()
    const minutes = dater.getMinutes() < 10 ? '0' + dater.getMinutes() : dater.getMinutes()
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dater.getDay()]
    const monthName = months[month - 1]
    const _stringDate = `    ${weekday} ${day}/${monthName}/${year}   ${hour}:${minutes}`
    return _stringDate
  }

  const sortedNutritionals = () => {
    var _newArray = []
    nutritionalSortMapper.map((x) => {
      Object.entries(product.nutritionalValues).map((y) => {
        if (x === y[0]) {
          _newArray.push(y)
        }
      })
    })
    return _newArray
  }

  return (
    <DropShadow style={style.shadowProp}>
      <View style={[ProductCardStyle.productCardContainer, { backgroundColor: ecoMapper[product.ecoType].bgColor }]}>
        <ScrollView style={{ padding: 20 }}>
          <View style={style.nameCompanyPropContainer}>
            <View style={style.nameCompanyContainer}>
              <Text
                adjustsFontSizeToFit={product.productName.length > 24}
                numberOfLines={2}
                style={style.productNameText}
              >
                {product.productName}
              </Text>
              <View>
                <Text style={style.companyNamePH}>Company Name:</Text>
                <Text
                  adjustsFontSizeToFit={product.companyName.length < 40}
                  numberOfLines={product.companyName.length >= 24 ? 2 : 1}
                  style={style.companyName}
                >
                  {product.companyName}
                </Text>
              </View>
            </View>
            <View style={style.ImageTypeProp}>
              <Image
                source={ecoMapper[product.ecoType].image}
                style={{
                  height: 100,
                  width: 100,
                }}
              />
              <View style={style.ecoTypeContainer}>
                <Text style={style.ecoTypeText}>{ecoMapper[product.ecoType].text}</Text>
              </View>
            </View>
          </View>
          {!product.containFoodOrLiquid && (
            <View style={style.scannedAtContainer}>
              <View style={style.scannedAtContent}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={2}
                  style={[style.containOther, { backgroundColor: ecoMapper[product.ecoType].scannedAtBg + 'd6' }]}
                >
                  Package of this product is <Text style={{ fontWeight: '800' }}>{ecoMapper[product.ecoType].text.toUpperCase()}</Text>, but
                  it`s content might be different!
                </Text>
                <View style={[ProductCardStyle.CirclePositioning, { top: '35%', right: '-11.5%' }]} />
              </View>
            </View>
          )}
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

          {!product.ingredients && (
            <View style={style.descriptionContainer}>
              <Text style={style.descriptionText}>Ingredients</Text>
              <View style={style.ingredientContent}>
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
                <View style={[ProductCardStyle.CirclePositioning, { top: '35%', right: '-11.5%' }]} />
              </View>
            </View>
          )}
          {product.nutritionalValues && (
            <View style={style.nutritionalContainer}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <Text style={style.descriptionText}>Nutritional Values</Text>
                <Text style={style.descriptionText}>Per 100g</Text>
              </View>
              <View style={style.nutritionalContent}>
                <View>
                  {sortedNutritionals().map((x, id) => (
                    <NutritionalValueViewer
                      data={x}
                      key={id}
                    />
                  ))}
                </View>
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
                Created At {parseDate(product.createdAt)}
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
                right: 64,
                top: 0,
              }}
            />
            <View
              style={{
                position: 'absolute',
                borderColor: '#232323',
                borderBottomWidth: 2,
                width: 44,
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
                right: '6.25%',
                top: 8,
                zIndex: -10,
              }}
            />
          </View>
          {/* END LINES */}
        </ScrollView>
      </View>
    </DropShadow>
  )
}

export default ScannedCard

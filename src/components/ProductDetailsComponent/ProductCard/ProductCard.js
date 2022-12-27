import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import { getProductOrNull } from '../../../helpers/firebaseHelpers'

import PlasticBottleProp from '../../../assets/images/LatestProducts/Plastic/PlasticBottle.png'
import { ProductCardStyle } from './ProductCardStyle'
import { FlatGrid } from 'react-native-super-grid'
import Icon from 'react-native-vector-icons/AntDesign'

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
        <View style={[ProductCardStyle.productCardContainer, { backgroundColor: '#F7F4FA' }]}>
          {/*  //TODO Fix ME || ecoMapper[product.ecoType].bgColor */}
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
                <View style={[ProductCardStyle.CirclePositioning, { top: '45%', right: '-12%' }]} />
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
                      <View style={[ProductCardStyle.CirclePositioning, { top: '45%', right: '-11.5%' }]} />
                    </>
                  )}
                </View>
              </View>
            )}
            {!product.nutritionalValues && (
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
                  style={style.scanndedAtDate}
                >
                  Scanned At {parseDate(productItem[1])}
                </Text>
                <View style={[ProductCardStyle.CirclePositioning, { top: '35%', right: '-11.5%' }]} />
              </View>
            </View>
            <PlasticProcessView bgColor={'#DCE8EF'} />
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
                  height: 12,
                  right: '16%',
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  borderColor: '#232323',
                  borderBottomWidth: 2,
                  width: 24,
                  right: '8%',
                  top: 10,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  borderColor: '#232323',
                  borderRightWidth: 2,
                  height: '90%',
                  right: '7.5%',
                  top: 10,
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

const PlasticProcessView = ({ bgColor }) => {
  const plasticFactory = require('../../../assets/images/LatestProducts/Plastic/industry.png')
  const melting = require('../../../assets/images/LatestProducts/Plastic/fondue.png')
  const clean = require('../../../assets/images/LatestProducts/Plastic/meter.png')
  const plastic = require('../../../assets/images/LatestProducts/Plastic/PlasticBottle.png')

  return (
    <View style={{ height: 240, backgroundColor: '#F7F4FA', position: 'relative', zIndex: 20 }}>
      <Text style={{ textAlign: 'center', color: '#2D2D2D77', fontWeight: '500' }}>Process of Plastic Recycle</Text>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
        <View style={{ width: '25%', height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Image
            source={plasticFactory}
            style={{
              height: 64,
              width: 64,
            }}
          />
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 12 }}
          >
            Plastic Factory
          </Text>
        </View>
        <View style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', display: 'flex', justifyContent: 'space-around' }}>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image
              source={melting}
              style={{
                height: 44,
                width: 44,
              }}
            />
            <Text
              numberOfLines={1}
              style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 12 }}
            >
              Melting
            </Text>
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image
              source={clean}
              style={{
                height: 44,
                width: 44,
              }}
            />
            <Text
              numberOfLines={1}
              style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 12 }}
            >
              Clean
            </Text>
          </View>
        </View>
        <View style={{ width: '15%', height: '100%', display: 'flex', justifyContent: 'center' }} />
        <View style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 12, width: 50 }}
          >
            New Bottle
          </Text>
          <Image
            source={plastic}
            style={{
              height: 64,
              width: 64,
            }}
          />
          <Text
            numberOfLines={2}
            style={{ textAlign: 'center', color: '#474747', fontWeight: '600', fontSize: 12 }}
          >
            Reusable Bottle
          </Text>
        </View>
      </View>
      {/* LINES */}
      <View
        style={{
          position: 'absolute',
          minHeight: '100%',
          minWidth: '100%',
          left: 15,
          zIndex: 10,
        }}
      >
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 24,
            right: 20,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '86%',
            right: '8%',
            top: 22,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 35,
            left: '6%',
            top: 22,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretdown'
          size={16}
          style={{ position: 'absolute', height: 35, left: '3.25%', top: 50 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: 60,
            top: 125,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderRightWidth: 2,
            height: 80,
            left: 80,
            top: 85,
          }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: 80,
            top: 85,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 95, top: 77.5 }}
        />
        <View
          style={{
            position: 'absolute',
            borderColor: '#232323',
            borderBottomWidth: 2,
            width: '8%',
            left: 80,
            top: 165,
          }}
        />
        <Icon
          color={'#232323'}
          name='caretright'
          size={16}
          style={{ position: 'absolute', height: 35, left: 95, top: 157.5 }}
        />
      </View>
      {/* END LINES */}
    </View>
  )
}

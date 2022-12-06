import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, Image, LogBox } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { saveProductToFirebase } from '../../helpers/firebaseHelpers'
import DropDownPicker from 'react-native-dropdown-picker'
import { ProductAddStyle } from './ProductAddStyle'
import Icon from 'react-native-vector-icons/Feather'
import Barcode from '@kichiyaki/react-native-barcode-generator'
import { FlatGrid, SectionGrid } from 'react-native-super-grid'

import Bottle from '../../assets/images/AddProduct/bottle.png'
import Metal from '../../assets/images/AddProduct/can.png'
import Microchip from '../../assets/images/AddProduct/microchip.png'
import Organic from '../../assets/images/AddProduct/apple.png'
import Paper from '../../assets/images/AddProduct/document.png'
import Plastic from '../../assets/images/AddProduct/plastic.png'

const items = [
  { label: 'Plastic', value: 'plastic', code: '#3498db', id: 1, icon: Plastic },
  { label: 'Paper', value: 'paper', code: '#2ecc71', id: 2, icon: Paper },
  { label: 'Metal', value: 'metal', code: '#95a5a6', id: 3, icon: Metal },
  { label: 'Electronic', value: 'ewaste', code: '#34495e', id: 4, icon: Microchip },
  { label: 'Glass', value: 'glass', code: '#a8ccd7', id: 5, icon: Bottle },
  { label: 'Organic', value: 'organic', code: '#e67e22', id: 6, icon: Organic },
]

const ProductAdd = ({ route, navigation }) => {
  const style = ProductAddStyle
  const { data, rawData, format, type } = route?.params?.barcode

  const [productName, setProductName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [ecoType, setEcoType] = useState('')

  const [containFoodOrLiquid, setContainFoodOrLiquid] = useState(false)
  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [nutritionalValues, setNutritionalValues] = useState({
    'carbohidrates': 30,
    'fats': 45,
    'sugar': Math.random() * 100,
  })

  const [ecoTypeSelected, setEcoTypeSelected] = useState(0)
  const [showFoodSection, setFoodSection] = useState(false)
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  useEffect(() => {
    if ([1, 2, 3, 5].includes(ecoTypeSelected)) {
      setFoodSection(true)
      setIngredients([]) //Is Reverted
      setNutritionalValues({ a: 1 }) //Is Reverted
    } else {
      setNutritionalValues(null)
      setIngredients(null)
      setFoodSection(false)
    }
    console.log(ingredients, nutritionalValues)
  }, [ecoTypeSelected])

  const handleSaveProduct = () => {
    const productObject = {
      [data]: {
        barCode: data,
        containFoodOrLiquid: containFoodOrLiquid,
        createdAt: Math.floor(new Date().getTime()),
        ecoType: ecoType,
        ingredients: ingredients,
        companyName: companyName,
        modifiedAt: Math.floor(new Date().getTime()),
        nutrionalValues: nutritionalValues,
        productName: productName,
      },
    }
    // console.log(productObject)
    saveProductToFirebase(productObject)
  }

  const handleAddIngredients = () => {
    setIngredients([ingredient, ...ingredients])
  }

  const barTitleFormat = (format) => `(${format.replace('_', '')})`

  return (
    <View style={style.screenContainer}>
      <View style={style.BackAndTitleContainer}>
        <TouchableOpacity
          style={style.BackIconStyle}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name='arrow-left'
            color={'#fff'}
            size={28}
          />
        </TouchableOpacity>
        <View style={style.AddProductTextView}>
          <Text style={style.AddProductText}>Add Product</Text>
        </View>
      </View>
      <ScrollView style={style.ScrollViewZone}>
        <View style={style.barCodeView}>
          <Text style={style.barCodeText}>Product Bar Code{format && barTitleFormat(format)}</Text>
          {format ? (
            <View style={style.barCodeZone}>
              <Barcode
                format={format.replace('_', '')}
                value={data}
                text={data}
                textStyle={{
                  fontSize: 14,
                  fontWeight: '600',
                }}
                height={40}
              />
            </View>
          ) : (
            <Text style={style.barCodeText}>{data}</Text>
          )}
        </View>
        <TextInput
          style={style.ProductNameStyle}
          onChangeText={(val) => setProductName(val)}
          value={productName}
          placeholder='Product Name'
        />

        <TextInput
          style={style.ManufactureNameStyle}
          onChangeText={(val) => setCompanyName(val)}
          value={companyName}
          placeholder='Company Name'
        />
        {/* <Text style={style.ProductTypeTextStyle}>Product Eco Type</Text> */}
        <FlatGrid
          itemDimension={90}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={items.slice(0, 6)}
          style={style.ProductTypeZoneStyle}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setEcoTypeSelected((prev) => (item.id === prev ? 0 : item.id))
                setEcoType(item.value)
              }}
              key={item.id}
              style={[
                style.ProductContainerStyle,
                {
                  backgroundColor: ecoTypeSelected === 0 ? item.code : ecoTypeSelected === item.id ? item.code : `${item.code}B3`,
                },
              ]}
            >
              <Image
                style={{
                  width: ecoTypeSelected === item.id ? 36 : 28,
                  height: ecoTypeSelected === item.id ? 36 : 28,
                }}
                source={item.icon}
              />
              <Text style={{ fontSize: ecoTypeSelected === item.id ? 16 : 14, color: '#fff', fontWeight: '600', marginTop: 5 }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
        {showFoodSection && (
          <View>
            <Checkbox
              status={containFoodOrLiquid ? 'checked' : 'unchecked'}
              onPress={() => {
                setContainFoodOrLiquid(!containFoodOrLiquid)
              }}
            />
            <Text>Contain Food or Liquid?</Text>
            <TextInput
              value={ingredient}
              onChangeText={(val) => setIngredient(val)}
              placeholder='Ingredients'
            />
            <Button
              title='Add Ingredient'
              onPress={() => handleAddIngredients()}
            />
            <View>
              {ingredients.map((x, index) => (
                <Text key={index}>{x}</Text>
              ))}
            </View>
          </View>
        )}
        <Button
          title='Save'
          onPress={() => handleSaveProduct()}
          disabled={!productName || !companyName || ecoTypeSelected === 0 || ingredients || nutritionalValues}
        />
      </ScrollView>
    </View>
  )
}
export default ProductAdd

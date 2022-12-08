import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
  LogBox,
  FlatList,
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { saveProductToFirebase } from '../../helpers/firebaseHelpers'
import DropDownPicker from 'react-native-dropdown-picker'
import { ProductAddStyle } from './ProductAddStyle'
import Barcode from '@kichiyaki/react-native-barcode-generator'
import { FlatGrid, SectionGrid } from 'react-native-super-grid'

import Bottle from '../../assets/images/AddProduct/bottle.png'
import Metal from '../../assets/images/AddProduct/can.png'
import Microchip from '../../assets/images/AddProduct/microchip.png'
import Organic from '../../assets/images/AddProduct/apple.png'
import Paper from '../../assets/images/AddProduct/document.png'
import Plastic from '../../assets/images/AddProduct/plastic.png'
import Plus from '../../assets/images/AddProduct/plus.png'

// import Icon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'

const items = [
  { label: 'Plastic', value: 'plastic', code: '#3498db', id: 1, icon: Plastic },
  { label: 'Paper', value: 'paper', code: '#2ecc71', id: 2, icon: Paper },
  { label: 'Metal', value: 'metal', code: '#95a5a6', id: 3, icon: Metal },
  { label: 'Electronic', value: 'ewaste', code: '#34495e', id: 4, icon: Microchip },
  { label: 'Glass', value: 'glass', code: '#a8ccd7', id: 5, icon: Bottle },
  { label: 'Organic', value: 'organic', code: '#e67e22', id: 6, icon: Organic },
]

const bigIngredientsList = [
  'Tomato',
  'Potato',
  'Chicken',
  'Fish',
  'Cucumber',
  'Beef Meat',
  'Tomato',
  'Potato',
  'Chicken',
  'Cheese and Wine',
  'Tomatoes and Cheese',
  'Beef Meat',
  'Potatoes and Cucumbers',
  'Potato',
  'Chicken',
  'Fish',
  'Cucumber',
  'Beef Meat',
]

const ProductAdd = ({ route, navigation }) => {
  const style = ProductAddStyle
  const { data, rawData, format, type } = route?.params?.barcode

  const [productName, setProductName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [ecoType, setEcoType] = useState('')

  const [containFoodOrLiquid, setContainFoodOrLiquid] = useState(false)
  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
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
      setNutritionalValues({ a: 1 }) //Is Reverted
    } else {
      setNutritionalValues(null)
      setFoodSection(false)
    }
  }, [ecoTypeSelected])

  const handleSaveProduct = () => {
    const productObject = {
      [data]: {
        barCode: data,
        containFoodOrLiquid: containFoodOrLiquid,
        createdAt: Math.floor(new Date().getTime()),
        ecoType: ecoType,
        ingredients: ingredientsList,
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
    ingredientsList.includes(ingredient) ? false : setIngredientsList([ingredient, ...ingredientsList])
    setIngredient('')
  }

  const removeIngredient = (index) => {
    const newIngredientList = [...ingredientsList]
    newIngredientList.splice(index, 1)
    setIngredientsList(newIngredientList)
    console.log(newIngredientList)
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
            name='arrowleft'
            color={'#fff'}
            size={28}
          />
        </TouchableOpacity>
        <View style={style.AddProductTextView}>
          <Text style={style.AddProductText}>Add Product</Text>
        </View>
      </View>
      <ScrollView
        style={style.ScrollViewZone}
        keyboardShouldPersistTaps='handled'
      >
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
            <View style={style.AdditionalDetailsContainerStyle}>
              <Text style={style.AdditionalDetailsTextStyle}>Additional Details</Text>
              <View style={style.AdditionalDetailsBorderStyle} />
            </View>
            {/* <FlatGrid
              itemDimension={20}
              spacing={10}
              staticDimension={120}
              style={style.IngredientsContainerStyle}
              horizontal
              data={ingredientsList.slice(0, 333)}
              renderItem={({ item, index }) => (
                <Text
                  onPress={() => removeIngredient(index)}
                  style={style.IngredientContainerStyle}
                >
                  {item}
                </Text>
              )}
            /> */}
            <FlatGrid
              key={ingredientsList.length * Math.random()}
              data={ingredientsList}
              itemDimension={40}
              staticDimension={52}
              spacing={8}
              horizontal
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  onPress={() => removeIngredient(index)}
                  style={style.IngredientContainerStyle}
                >
                  <Text style={style.IngredientTextStyle}>{item}</Text>
                  <Icon
                    style={style.IngredientDeleteIconStyle}
                    name='close'
                    size={14}
                  />
                </TouchableOpacity>
              )}
            />

            <View style={style.AddIngredientContainerStyle}>
              <TextInput
                style={style.AddIngredientInputStyle}
                value={ingredient}
                onChangeText={(val) => setIngredient(val)}
                placeholder='Add Ingredient'
                maxLength={20}
                onSubmitEditing={() => handleAddIngredients()}
              />
              <TouchableOpacity
                disabled={!ingredient}
                style={style.AddIngredientButtonStyle}
                onPress={() => handleAddIngredients()}
              >
                <Image
                  style={[{ opacity: !ingredient ? 0.5 : 1 }, style.AddIngredientButtonStyle]}
                  source={Plus}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={style.containFoodOrLiquidContainerStyle}
              onPress={() => {
                setContainFoodOrLiquid(!containFoodOrLiquid)
              }}
            >
              <Checkbox status={containFoodOrLiquid ? 'checked' : 'unchecked'} />
              <Text style={style.containFoodOrLiquidTextStyle}>Contain Food or Liquid?</Text>
            </TouchableOpacity>
          </View>
        )}
        <Button
          title='Save'
          onPress={() => handleSaveProduct()}
          disabled={!productName || !companyName || ecoTypeSelected === 0}
        />
      </ScrollView>
    </View>
  )
}
export default ProductAdd

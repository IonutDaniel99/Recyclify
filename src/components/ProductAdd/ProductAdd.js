import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, Image, LogBox, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { saveProductToFirebase } from '../../helpers/firebaseHelpers'
import { ProductAddStyle } from './ProductAddStyle'
import Barcode from '@kichiyaki/react-native-barcode-generator'
import { FlatGrid } from 'react-native-super-grid'

import { NutritionalValueContainer } from './NutritionalValueContainer'

import Bottle from '../../assets/images/AddProduct/bottle.png'
import Metal from '../../assets/images/AddProduct/can.png'
import Microchip from '../../assets/images/AddProduct/microchip.png'
import Organic from '../../assets/images/AddProduct/apple.png'
import Paper from '../../assets/images/AddProduct/document.png'
import Plastic from '../../assets/images/AddProduct/plastic.png'

import Icon from 'react-native-vector-icons/AntDesign'

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
  const [ingredientsList, setIngredientsList] = useState([])
  const [nutritionalValues, setNutritionalValues] = useState()

  const [ecoTypeSelected, setEcoTypeSelected] = useState(0)
  const [showFoodSection, setFoodSection] = useState(false)
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  useEffect(() => {
    if ([1, 2, 3, 5].includes(ecoTypeSelected)) {
      setFoodSection(true)
      setNutritionalValues([])
    } else {
      setNutritionalValues([])
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
    console.log(productObject)
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
              <Text style={style.AdditionalDetailsTextStyle}>Ingredients Details</Text>
              <View style={style.AdditionalDetailsBorderStyle} />
            </View>
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

            <View style={[{ marginTop: ingredientsList.length !== 0 ? 10 : 20 }, style.AddIngredientContainerStyle]}>
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
                activeOpacity={1}
                style={style.AddIngredientButtonStyle}
                onPress={() => handleAddIngredients()}
              >
                <Text
                  style={[
                    {
                      backgroundColor: !ingredient ? '#32CD32A1' : '#32CD32',
                    },
                    style.AddIngredientButtonStyle,
                  ]}
                >
                  Add
                </Text>
              </TouchableOpacity>
            </View>

            <View style={style.AdditionalDetailsContainerStyle}>
              <Text style={style.AdditionalDetailsTextStyle}>Nutritional Values</Text>
              <View style={style.AdditionalDetailsBorderStyle} />
            </View>
            <View style={style.NutritionalValuesContainerStyle}>
              <View style={style.NutritionalValuesTextsContainerStyle}>
                <Text style={style.NutritionalValuesCaloriesStyle}>Calories</Text>
                <Text style={style.NutritionalValuesTextsStyle}>Per 100g</Text>
              </View>
              <NutritionalValueContainer
                mainText={'Total Fat'}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    totalFat: val,
                  })
                }
              />
              <NutritionalValueContainer
                subText={'Saturated Fat'}
                editable={nutritionalValues.totalFat == null}
                parentValue={nutritionalValues.totalFat}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    saturatedFat: val,
                  })
                }
              />
              <NutritionalValueContainer
                mainText={'Cholesterol'}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    cholesterol: val,
                  })
                }
              />
              <NutritionalValueContainer
                mainText={'Sodium'}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    sodium: val,
                  })
                }
                isMg
              />
              <NutritionalValueContainer
                mainText={'Total Carbohydrate'}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    totalCarbohydrate: val,
                  })
                }
              />
              <NutritionalValueContainer
                subText={'Dietary Fiber'}
                editable={nutritionalValues.totalCarbohydrate == null}
                parentValue={nutritionalValues.totalCarbohydrate}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    dietaryFiber: val,
                  })
                }
              />
              <NutritionalValueContainer
                subText={'Sugar'}
                editable={nutritionalValues.totalCarbohydrate == null}
                parentValue={nutritionalValues.totalCarbohydrate}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    sugar: val,
                  })
                }
              />
              <NutritionalValueContainer
                mainText={'Protein'}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    protein: val,
                  })
                }
              />
            </View>
            {/* <TouchableOpacity
              activeOpacity={1}
              style={style.containFoodOrLiquidContainerStyle}
              onPress={() => {
                setContainFoodOrLiquid(!containFoodOrLiquid)
                console.log(items[ecoTypeSelected])
              }}
            >
              <Checkbox
                color={items[ecoTypeSelected - 1].code}
                status={containFoodOrLiquid ? 'checked' : 'unchecked'}
              />
              <Text style={style.containFoodOrLiquidTextStyle}>Contain Food or Liquid?</Text>
            </TouchableOpacity> */}
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

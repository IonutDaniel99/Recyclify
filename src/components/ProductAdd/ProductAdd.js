import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import IconEntypo from 'react-native-vector-icons/MaterialIcons'

import SwitchToggle from 'react-native-switch-toggle'

const items = [
  { label: 'Plastic', value: 'plastic', code: '#3498db', id: 1, icon: Plastic },
  { label: 'Paper', value: 'paper', code: '#2ecc71', id: 2, icon: Paper },
  { label: 'Metal', value: 'metal', code: '#95a5a6', id: 3, icon: Metal },
  { label: 'Electronic', value: 'ewaste', code: '#34495e', id: 4, icon: Microchip },
  { label: 'Glass', value: 'glass', code: '#a8ccd7', id: 5, icon: Bottle },
  { label: 'Organic', value: 'organic', code: '#e67e22', id: 6, icon: Organic },
]

const barCodeMapper = {
  'CODE_128': 'CODE128',
  'CODE_39': 'CODE39',
  'CODABAR': 'codabar',
  'DATA_MATRIX': '',
  'EAN_13': 'EAN13',
  'EAN_8': 'EAN8',
  'ITF': 'ITF',
  'QR_CODE': 'QRCODE',
  'UPC_A': 'UPC',
  'UPC_E': 'UPC',
  'ALL': '',
}

const ProductAdd = ({ route, navigation }) => {
  const style = ProductAddStyle
  const { data, format } = route?.params?.barcode

  const [productName, setProductName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [description, setDescription] = useState('')
  const [ecoType, setEcoType] = useState('')

  const [containFoodOrLiquid, setContainFoodOrLiquid] = useState(false)
  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [nutritionalValues, setNutritionalValues] = useState()

  const [ecoTypeSelected, setEcoTypeSelected] = useState(0)
  const [showFoodSection, setFoodSection] = useState(false)

  useEffect(() => {
    LogBox.ignoreAllLogs(true)
  }, [])

  useEffect(() => {
    if ([1, 2, 3, 5].includes(ecoTypeSelected)) {
      setFoodSection(true)
    } else {
      setNutritionalValues([])
      setIngredientsList([])
      setFoodSection(false)
    }
  }, [ecoTypeSelected])

  const handleSaveProduct = () => {
    const productObject = {
      [data]: {
        barCode: data,
        barCodeType: format,
        containFoodOrLiquid: containFoodOrLiquid,
        createdAt: Math.floor(new Date().getTime()),
        ecoType: ecoType,
        ingredients: ingredientsList,
        companyName: companyName,
        modifiedAt: Math.floor(new Date().getTime()),
        nutrionalValues: nutritionalValues,
        productName: productName,
        description: description,
      },
    }
    saveProductToFirebase(productObject)
    navigation.navigate({
      name: 'ProductDetailsScreen',
      params: {
        productDetailsCallback: {
          data: data,
          format: format,
        },
      },
      merge: true,
    })
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
          onPress={() => navigation.goBack()}
          style={style.BackIcon}
        >
          <Icon
            color={'#fff'}
            name='arrowleft'
            size={28}
          />
        </TouchableOpacity>
        <View style={style.AddProductTextView}>
          <Text style={style.AddProductText}>Add Product</Text>
        </View>
      </View>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={style.ScrollViewZone}
      >
        <View style={style.barCodeView}>
          <Text style={style.barCodeText}>Product Bar Code{barCodeMapper[format] && barTitleFormat(format)}</Text>
          {barCodeMapper[format] ? (
            <View style={style.barCodeZone}>
              <Barcode
                format={barCodeMapper[format]}
                height={40}
                text={data}
                textStyle={{
                  fontSize: 14,
                  fontWeight: '600',
                }}
                value={data}
              />
            </View>
          ) : (
            <Text style={style.barCodeText}>{data}</Text>
          )}
        </View>
        <TextInput
          multiline
          onChangeText={(val) => setProductName(val)}
          placeholder='Product Name'
          style={style.ProductName}
          value={productName}
        />

        <TextInput
          multiline
          onChangeText={(val) => setCompanyName(val)}
          placeholder='Company Name'
          style={style.ManufactureName}
          value={companyName}
        />
        <TextInput
          maxLength={600}
          multiline
          onChangeText={(val) => setDescription(val)}
          placeholder='Description'
          style={style.DescriptionInput}
        />
        <FlatGrid
          data={items.slice(0, 6)}
          itemDimension={90}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={1}
              key={item.id}
              onPress={() => {
                setEcoTypeSelected((prev) => (item.id === prev ? 0 : item.id))
                setEcoType(item.value)
              }}
              style={[
                style.ProductContainer,
                {
                  backgroundColor: ecoTypeSelected === 0 ? item.code : ecoTypeSelected === item.id ? item.code : `${item.code}B3`,
                },
              ]}
            >
              <Image
                source={item.icon}
                style={{
                  width: ecoTypeSelected === item.id ? 36 : 28,
                  height: ecoTypeSelected === item.id ? 36 : 28,
                }}
              />
              <Text style={{ fontSize: ecoTypeSelected === item.id ? 16 : 14, color: '#fff', fontWeight: '600', marginTop: 5 }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={style.ProductTypeZone}
        />
        {showFoodSection && (
          <View>
            <View style={style.AdditionalDetailsContainer}>
              <Text style={style.AdditionalDetailsText}>Ingredients Details</Text>
              <View style={style.AdditionalDetailsBorder} />
            </View>
            <FlatGrid
              data={ingredientsList}
              horizontal
              itemDimension={40}
              key={ingredientsList.length * Math.random()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={1}
                  key={index}
                  onPress={() => removeIngredient(index)}
                  style={style.IngredientContainer}
                >
                  <Text style={style.IngredientText}>{item}</Text>
                  <Icon
                    name='close'
                    size={14}
                    style={style.IngredientDeleteIcon}
                  />
                </TouchableOpacity>
              )}
              spacing={8}
              staticDimension={52}
            />

            <View style={[{ marginTop: ingredientsList.length !== 0 ? 10 : 20 }, style.AddIngredientContainer]}>
              <TextInput
                maxLength={20}
                onChangeText={(val) => setIngredient(val)}
                onSubmitEditing={() => handleAddIngredients()}
                placeholder='Add Ingredient'
                style={style.AddIngredientInput}
                value={ingredient}
              />
              <TouchableOpacity
                activeOpacity={1}
                disabled={!ingredient}
                onPress={() => handleAddIngredients()}
                style={style.AddIngredientButton}
              >
                <Text
                  style={[
                    {
                      backgroundColor: !ingredient ? '#32CD32A1' : '#32CD32',
                    },
                    style.AddIngredientButton,
                  ]}
                >
                  Add
                </Text>
              </TouchableOpacity>
            </View>

            <View style={style.AdditionalDetailsContainer}>
              <Text style={style.AdditionalDetailsText}>Nutritional Values</Text>
              <View style={style.AdditionalDetailsBorder} />
            </View>
            <View style={style.NutritionalValuesContainer}>
              <View style={style.NutritionalValuesTextsContainer}>
                <Text style={style.NutritionalValuesCalories}>Calories</Text>
                <Text style={style.NutritionalValuesTexts}>Per 100g</Text>
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
                editable={nutritionalValues.totalFat == null}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    saturatedFat: val,
                  })
                }
                parentValue={nutritionalValues.totalFat}
                subText={'Saturated Fat'}
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
                isMg
                mainText={'Sodium'}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    sodium: val,
                  })
                }
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
                editable={nutritionalValues.totalCarbohydrate == null}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    dietaryFiber: val,
                  })
                }
                parentValue={nutritionalValues.totalCarbohydrate}
                subText={'Dietary Fiber'}
              />
              <NutritionalValueContainer
                editable={nutritionalValues.totalCarbohydrate == null}
                onValChange={(val) =>
                  setNutritionalValues({
                    ...nutritionalValues,
                    sugar: val,
                  })
                }
                parentValue={nutritionalValues.totalCarbohydrate}
                subText={'Sugar'}
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
            <View style={style.AdditionalDetailsContainer}>
              <Text style={style.AdditionalDetailsText}>Other Details</Text>
              <View style={style.AdditionalDetailsBorder} />
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setContainFoodOrLiquid(!containFoodOrLiquid)}
              style={style.containFoodOrLiquidContainer}
            >
              <SwitchToggle
                backgroundColorOff='#fff'
                backgroundColorOn={ecoTypeSelected === 0 ? '#2f2f2f' : items[ecoTypeSelected - 1].code}
                circleColorOff={ecoTypeSelected === 0 ? '#2f2f2f' : items[ecoTypeSelected - 1].code}
                circleColorOn='#fff'
                circleStyle={{
                  width: 14,
                  height: 14,
                  borderRadius: 20,
                }}
                containerStyle={{
                  marginTop: 4,
                  width: 48,
                  height: 24,
                  borderRadius: 25,
                  borderWidth: 1,
                  borderColor: '#000',
                  padding: 5,
                  marginRight: 10,
                }}
                onPress={() => setContainFoodOrLiquid(!containFoodOrLiquid)}
                switchOn={containFoodOrLiquid ? true : false}
              />
              <Text style={style.containFoodOrLiquidText}>Contain Food or Liquid?</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{ height: 100 }} />
      </ScrollView>
      <TouchableOpacity
        disabled={!productName || !companyName || ecoTypeSelected === 0}
        onPress={() => handleSaveProduct()}
        style={[
          {
            backgroundColor: ecoTypeSelected === 0 ? '#2f2f2f99' : items[ecoTypeSelected - 1].code,
            opacity: !productName || !companyName || ecoTypeSelected === 0 ? 0.5 : 1,
          },
          style.SaveButton,
        ]}
      >
        <IconEntypo
          color={'#fff'}
          name='save'
          size={36}
        />
      </TouchableOpacity>
    </View>
  )
}
export default ProductAdd

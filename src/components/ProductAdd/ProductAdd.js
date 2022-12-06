import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { saveProductToFirebase } from '../../helpers/firebaseHelpers'
import DropDownPicker from 'react-native-dropdown-picker'
import { ProductAddStyle } from './ProductAddStyle'
import Icon from 'react-native-vector-icons/Feather'
import Barcode from '@kichiyaki/react-native-barcode-generator'

const ProductAdd = ({ route, navigation }) => {
  const style = ProductAddStyle
  const { data, rawData, format, type } = route?.params?.barcode
  const [containFoodOrLiquid, setContainFoodOrLiquid] = useState(false)
  const [createdAt, setCreatedAt] = useState(Math.floor(new Date().getTime()))
  const [ecoType, setEcoType] = useState(null)

  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [nutritionalValues, setNutritionalValues] = useState({
    'carbohidrates': 30,
    'fats': 45,
    'sugar': Math.random() * 100,
  })
  const [manufacture, setManufacture] = useState()
  const [prodName, setProdName] = useState('')

  const handleSaveProduct = () => {
    const productObject = {
      [data]: {
        barCode: data,
        containFoodOrLiquid: containFoodOrLiquid,
        createdAt: createdAt,
        ecoType: ecoType,
        ingredients: ingredients,
        manufacture: manufacture,
        modifiedAt: createdAt,
        nutrionalValues: nutritionalValues,
        prodName: prodName,
      },
    }

    saveProductToFirebase(productObject)
  }

  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([
    { label: 'Electronic', value: 'ewaste' },
    { label: 'Plastic', value: 'plastic' },
    { label: 'Metal', value: 'metal' },
    { label: 'Glass', value: 'glass' },
    { label: 'Paper', value: 'paper' },
    { label: 'Organic', value: 'organic' },
  ])

  const handleAddIngredients = () => {
    setIngredients([ingredient, ...ingredients])
  }

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
          <Text style={style.barCodeText}>Product Bar Code{format && ` (${format.replace('_', '')})`}</Text>
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

        <Checkbox
          status={containFoodOrLiquid ? 'checked' : 'unchecked'}
          onPress={() => {
            setContainFoodOrLiquid(!containFoodOrLiquid)
          }}
        />
        <Text>Contain Food or Liquid?</Text>
        <TextInput
          onChangeText={(val) => setEcoType(val)}
          value={ecoType}
          placeholder='ecoType'
        />
        <DropDownPicker
          open={open}
          value={ecoType}
          items={items}
          setOpen={setOpen}
          setValue={setEcoType}
          setItems={setItems}
          maxHeight={300}
        />
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
        <TextInput
          onChangeText={(val) => setManufacture(val)}
          value={manufacture}
          placeholder='manufacture'
        />
        <TextInput
          onChangeText={(val) => setProdName(val)}
          value={prodName}
          placeholder='product name'
        />

        <Button
          title='Save'
          onPress={() => handleSaveProduct()}
          disabled={!data || !ecoType || !ingredients || !nutritionalValues || !manufacture || !prodName}
        />
      </ScrollView>
    </View>
  )
}
export default ProductAdd

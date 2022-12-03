import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { saveProductToFirebase } from '../../helpers/firebaseHelpers'

const ProductAdd = ({ route, navigation }) => {
  const rawCode = route.params.barcode

  const [barcode, setBarCode] = useState(rawCode)
  const [containFoodOrLiquid, setContainFoodOrLiquid] = useState(false)
  const [createdAt, setCreatedAt] = useState(Math.floor(new Date().getTime()))
  const [ecoType, setEcoType] = useState()
  const [ingredients, setIngredients] = useState(['milk', 'water', 'other'])
  const [nitritionalValues, setNutritionalValues] = useState({
    'carbohidrates': 30,
    'fats': 45,
    'sugar': Math.random() * 100,
  })
  const [manufacture, setManufacture] = useState()
  const [prodName, setProdName] = useState('')

  const handleSaveProduct = () => {
    const productObject = {
      [rawCode]: {
        barCode: rawCode,
        containFoodOrLiquid: containFoodOrLiquid,
        createdAt: createdAt,
        ecoType: ecoType,
        ingredients: ingredients,
        manufacture: manufacture,
        modifiedAt: createdAt,
        nutrionalValues: nitritionalValues,
        prodName: prodName,
      },
    }

    saveProductToFirebase(productObject)
  }

  return (
    <View>
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
      />
      <TextInput
        onChangeText={(val) => setBarCode(val.replace(/[^0-9]/g, ''))}
        value={rawCode || barcode}
        keyboardType='numeric'
        placeholder='barcode'
      />
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
      <Text>Ceva Ingrediente</Text>
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
        title='Reset'
        onPress={() => handleSaveProduct()}
      />
    </View>
  )
}
export default ProductAdd

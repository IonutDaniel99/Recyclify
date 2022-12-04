import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { saveProductToFirebase } from '../../helpers/firebaseHelpers'
import DropDownPicker from 'react-native-dropdown-picker'

const ProductAdd = ({ route, navigation }) => {
  const rawCode = route.params.barcode

  const [barcode, setBarCode] = useState(rawCode)
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
      [rawCode]: {
        barCode: rawCode,
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
        disabled={!barcode || !ecoType || !ingredients || !nutritionalValues || !manufacture || !prodName}
      />
    </View>
  )
}
export default ProductAdd

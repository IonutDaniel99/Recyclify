import React from 'react'
import { Text, View } from 'react-native'

const nutritionalMapper = {
  'energeticValue': {
    'name': 'Energetic Value',
    'mainText': true,
    'subText': false,
    'isG': false,
    'isMg': false,
    'isKcal': true,
  },
  'totalFat': {
    'name': 'Total Fat',
    'mainText': true,
    'subText': false,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'saturatedFat': {
    'name': 'Saturated Fat',
    'mainText': false,
    'subText': true,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'transFat': {
    'name': 'Trans Fat',
    'mainText': false,
    'subText': true,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'polyFat': {
    'name': 'Polyunsaturated Fat',
    'mainText': false,
    'subText': true,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'monoFat': {
    'name': 'Monosaturated Fat',
    'mainText': false,
    'subText': true,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'cholesterol': {
    'name': 'Cholesterol',
    'mainText': true,
    'subText': false,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'sodium': {
    'name': 'Sodium',
    'mainText': true,
    'subText': false,
    'isG': false,
    'isMg': true,
    'isKcal': false,
  },
  'totalCarbohydrate': {
    'name': 'Total Carbohydrate',
    'mainText': true,
    'subText': false,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'dietaryFiber': {
    'name': 'Dietary Fiber',
    'mainText': false,
    'subText': true,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'sugar': {
    'name': 'Sugar',
    'mainText': false,
    'subText': true,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'protein': {
    'name': 'Protein',
    'mainText': true,
    'subText': false,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'fiber': {
    'name': 'Fiber',
    'mainText': true,
    'subText': false,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
  'salt': {
    'name': 'Salt',
    'mainText': true,
    'subText': false,
    'isG': true,
    'isMg': false,
    'isKcal': false,
  },
}

export const NutritionalValueViewer = ({ data }) => {
  const name = data[0]
  const value = data[1]

  const nutritionalObject = nutritionalMapper[name]

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#00000033',
        paddingVertical: 5,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {!nutritionalObject.subText ? (
          <Text style={{ fontWeight: '700', color: '#000000C6' }}>{nutritionalObject.name}</Text>
        ) : (
          <Text style={{ marginLeft: 15, fontWeight: '400', color: '#00000099' }}>{nutritionalObject.name}</Text>
        )}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: 80,
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            height: 24,
            width: 50,
            padding: 0,
            display: 'flex',
            alignItems: 'flex-end',
            color: '#000',
            textAlign: 'right',
            textAlignVertical: 'center',
          }}
        >
          {value}
        </Text>
        {nutritionalObject.isG && <Text style={{ color: '#9fa1a1' }}>mg</Text>}
        {nutritionalObject.isMg && <Text style={{ color: '#9fa1a1' }}>g</Text>}
        {nutritionalObject.isKcal && <Text style={{ color: '#9fa1a1' }}>kcal</Text>}
      </View>
    </View>
  )
}

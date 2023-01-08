import { useEffect, useState } from 'react'
import { Text, TextInput, ToastAndroid, View } from 'react-native'
import React from 'react'
export const NutritionalValueContainer = ({ mainText, subText, editable, parentValue, isMg, isG, isKcal, onValChange }) => {
  const [value, setValue] = useState(null)
  useEffect(() => {
    onValChange(value)
  }, [value])

  useEffect(() => {
    if (value === null) return
    if (parseInt(value, 10) > parseInt(parentValue, 10)) {
      setValue(null)
      ToastAndroid.showWithGravityAndOffset("Current value can't be higher than its parent!", 3, 3, 10, 20)
      return
    }
  }, [parentValue, value])

  useEffect(() => {
    if (editable) setValue(null)
  }, [editable])

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
        {!subText ? (
          <Text style={{ fontWeight: '700', color: '#000000C6' }}>{mainText}</Text>
        ) : (
          <Text style={{ marginLeft: 15, fontWeight: '400', color: '#00000099' }}>{subText}</Text>
        )}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '24%',
          justifyContent: 'space-between',
          borderColor: '#2f2f2f66',
          borderWidth: 1,
          paddingRight: 10,
          paddingLeft: 10,
          borderRadius: 10,
        }}
      >
        <TextInput
          editable={!editable}
          keyboardType='numeric'
          maxLength={4}
          onChangeText={(e) => setValue(e || null)}
          placeholder='___'
          placeholderTextColor={'#8c8c8c'}
          selectTextOnFocus={!editable}
          style={{
            height: 24,
            padding: 0,
            textAlign: 'right',
            display: 'flex',
            alignItems: 'flex-end',
            paddingRight: 5,
            color: '#000',
          }}
          value={value}
        />
        {isMg && <Text style={{ color: '#9fa1a1' }}>mg</Text>}
        {isG && <Text style={{ color: '#9fa1a1' }}>g</Text>}
        {isKcal && <Text style={{ color: '#9fa1a1' }}>Kcal</Text>}
      </View>
    </View>
  )
}

import React from 'react'
import { View, Text, Button } from 'react-native'

const WelcomeScreen = ({ navigation }) => {
  const handleScanBarCode = () => {
    console.log('Catre LoginScreen')
    navigation.navigate('LoginScreen')
  }
  return (
    <View>
      <Text>Salut</Text>
      <Button title='Catre Login' onPress={handleScanBarCode} />
    </View>
  )
}

export default WelcomeScreen

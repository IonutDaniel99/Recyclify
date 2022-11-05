import React, { Component, useState } from 'react'
import { StyleSheet, View, Alert, Text, Dimensions, Button } from 'react-native'
import BarcodeMask from 'react-native-barcode-mask'
import { RNCamera } from 'react-native-camera'

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

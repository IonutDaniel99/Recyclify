import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Main({ navigation }) {
  const handleScanBarCode = () => {
    console.log('test')
    navigation.navigate('CameraBarcodeScanner')
  }

  const handleInsertBarCode = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.container}>
        <Button title='Scan BarCode' onPress={handleScanBarCode} />
        <Button title='Insert BarCode' onPress={handleInsertBarCode} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    maxHeight: 150,
    width: 200,
  },
})

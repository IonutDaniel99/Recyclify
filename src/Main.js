import React from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

export default function Main({ navigation, route }) {
  const { userData } = route.params.options
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
        {userData && <Text style={{ color: 'black' }}>{userData.user.name}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  container: {
    width: 200,
    maxHeight: 150,
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

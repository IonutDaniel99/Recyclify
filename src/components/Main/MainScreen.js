import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { firebase } from '@react-native-firebase/auth'
import { barcodeMockData } from '../../mocks/mocks'

const MainScreen = ({ navigation }) => {
  const [userDetails] = useState(firebase.auth().currentUser)

  // useEffect(() => {
  //   console.log('ConsoleLogUser', userDetails)
  // }, [])

  const handleScanBarCode = () => {
    navigation.navigate('CameraBarcodeScanner')
  }

  const handleInsertBarCode = () => {
    navigation.navigate('ProductDetailsScreen', {
      barcodeData: barcodeMockData,
    })
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.container}>
        <Button title='Scan BarCode' onPress={handleScanBarCode} />
        <Button title='Insert BarCode' onPress={handleInsertBarCode} />
        <Text style={styles.text}> {userDetails?.displayName} </Text>
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
  text: {
    color: 'black',
    fontSize: 24,
  },
})

export default MainScreen

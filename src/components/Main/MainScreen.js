import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { firebase } from '@react-native-firebase/auth'
import { barcodeMockData } from '../../mocks/mocks'
import { nullOrCreateCollectionsOnFirebase, writeDataToFirebase } from '../../configs/firebase/firebaseHelpers'

const MainScreen = ({ navigation }) => {
  const [userDetails] = useState('ngBXQ1ASgcMS6PrHgekw6HZNX5s2')
  // const [userDetails] = useState(firebase.auth().currentUser)

  //Initialization if none
  nullOrCreateCollectionsOnFirebase()

  const handleScanBarCode = () => {
    navigation.navigate('CameraBarcodeScanner')
  }

  const handleInsertBarCode = () => {
    navigation.navigate('ProductDetailsScreen', {
      barcodeData: { 'data': null, 'dataRaw': null, 'format': null, 'type': null },
    })
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.container}>
        <Button title='Scan BarCode' onPress={handleScanBarCode} />
        <Button title='Insert BarCode' onPress={handleInsertBarCode} />
        <Text style={styles.text}> {userDetails} </Text>
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
    fontSize: 14,
  },
})

export default MainScreen


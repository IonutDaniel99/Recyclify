import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

export default function Main({ navigation }) {
  const [userInfoData, setUserInfoData] = useState()

  GoogleSignin.configure({
    webClientId: '804203372642-40slgemmask7bfccfqus38anq5h1knpt.apps.googleusercontent.com',
    offlineAccess: true,
    androidClientId: '804203372642-69p82vrqi230nm713d5iqnaks3557ium.apps.googleusercontent.com',
  })

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices()
      console.log('reached google sign in')
      const userInfo = await GoogleSignin.signIn()
      setUserInfoData(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error occured SIGN_IN_CANCELLED')
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error occured IN_PROGRESS')
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error occured PLAY_SERVICES_NOT_AVAILABLE')
      } else {
        console.log('error occured unknow error', error)
      }
    }
  }

  const handleScanBarCode = () => {
    console.log('test')
    navigation.navigate('CameraBarcodeScanner')
  }

  const handleInsertBarCode = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => console.log(data))
    // navigation.navigate('ProductDetailsScreen', { text: 'hello' })
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.container}>
        <Button title='Scan BarCode' onPress={handleScanBarCode} />
        <Button title='Insert BarCode' onPress={handleInsertBarCode} />
        <Button title='Google Sign-In' onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
        {userInfoData && <Text>{console.log(userInfoData.user.name)}</Text>}
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

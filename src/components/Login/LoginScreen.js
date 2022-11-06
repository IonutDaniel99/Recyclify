import { View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

const LoginScreen = ({ navigation }) => {
  const [userInfoData, setUserInfoData] = useState()

  useEffect(() => {
    if (!userInfoData) return
    navigation.navigate('MainScreen', { userData: userInfoData })
  }, [userInfoData])

  GoogleSignin.configure({
    webClientId: '804203372642-40slgemmask7bfccfqus38anq5h1knpt.apps.googleusercontent.com',
    androidClientId: '804203372642-69p82vrqi230nm713d5iqnaks3557ium.apps.googleusercontent.com',
    offlineAccess: true,
  })

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices()
      console.log('reached google sign in')
      const userInfo = await GoogleSignin.signIn()
      setUserInfoData(userInfo)
      const credential = auth.GoogleAuthProvider.credential(userInfo.idToken)
      await auth().signInWithCredential(credential)
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

  return (
    <View>
      <Button title='Google Sign-In' onPress={() => onGoogleButtonPress()} />
    </View>
  )
}

export default LoginScreen

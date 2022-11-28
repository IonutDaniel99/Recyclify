import { View, Button, ToastAndroid, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

import { GoogleSingInConfigs } from '../../configs/google/googleSignInConfig'
import { LoginScreenStyle } from './LoginScreenStyle'

import DropShadow from 'react-native-drop-shadow'

const LoginScreen = ({ navigation }) => {
  const style = LoginScreenStyle
  GoogleSignin.configure(GoogleSingInConfigs)

  const [userInfoData, setUserInfoData] = useState()

  useEffect(() => {
    if (userInfoData) navigation.navigate('MainScreen', { userData: userInfoData })
  }, [userInfoData])

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      setUserInfoData(userInfo)
      const credential = auth.GoogleAuthProvider.credential(userInfo.idToken)
      await auth().signInWithCredential(credential)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        showToast('Sing In Canceled')
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        showToast('Sing In is already in progress')
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        showToast('Play Services Not Available')
      } else {
        showToast('Unknown error')
        console.log(error)
      }
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.loginText}>Login</Text>
      <View style={style.inputsContainer}>
        <View style={style.inputFieldContainer}>
          <TextInput
            value='user'
            style={style.userInput}
          />
          <TextInput
            value='pass'
            style={style.passInput}
          />
        </View>
        <Text style={style.textInput}>Forgot password?</Text>
      </View>
      <TouchableOpacity
        style={style.loginButtonContainer}
        onPress={(e) => console.log('f')}
      >
        <Text style={style.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={style.socialContainer}>
        <Text style={style.socialText}>Or Sign Up Using</Text>
        <View style={style.socialButtons}>
          <TouchableOpacity
            style={style.appButtonContainer}
            onPress={(e) => onGoogleButtonPress()}
          >
            <Image source={require('../../assets/images/Google.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.appButtonContainer}
            onPress={(e) => console.log('g')}
          >
            <Image source={require('../../assets/images/Facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.appButtonContainer}
            onPress={(e) => console.log('m')}
          >
            <Image source={require('../../assets/images/Microsoft.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.appButtonContainer}
            onPress={(e) => console.log('a')}
          >
            <Image source={require('../../assets/images/Apple.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.noAccount}>
        <Text>Dont have an account?</Text>
        <Text style={style.create}>Create</Text>
      </View>
    </View>
  )
}

export default LoginScreen

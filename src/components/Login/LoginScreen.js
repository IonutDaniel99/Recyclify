import { View, Button, ToastAndroid, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

import { GoogleSingInConfigs } from '../../configs/google/googleSignInConfig'
import { LoginScreenStyle } from './LoginScreenStyle'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import IconFeather from 'react-native-vector-icons/Feather'

const LoginScreen = ({ navigation }) => {
  const style = LoginScreenStyle
  GoogleSignin.configure(GoogleSingInConfigs)

  const [userInfoData, setUserInfoData] = useState()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isPassSecured, setIsPassSecured] = useState(true)

  useEffect(() => {
    if (userInfoData) navigation.navigate('MainScreen', { userData: userInfoData })
  }, [userInfoData])

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  const handleForgotPassword = () => {
    console.log('Forgot Password')
  }

  const handleEmailAndPasswordLogin = () => {
    console.log(`username: ${username} / password: ${password}`)
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

  async function onFacebookButtonPress() {
    console.log('on Facebook login')
  }

  async function onMicrosoftButtonPress() {
    console.log('on Microsoft login')
  }

  async function onAppleButtonPress() {
    console.log('on Apple login')
  }
  async function onAccountCreate() {
    console.log('on account Create')
  }
  return (
    <View style={style.container}>
      <Text style={style.loginText}>Login</Text>
      <View style={style.inputsContainer}>
        <View style={style.inputFieldContainer}>
          <View style={style.userInputContainer}>
            <Icon
              name='user'
              style={style.userIcon}
            />
            <TextInput
              style={style.userInput}
              value={username}
              keyboardType='email-address'
              placeholder='E-mail'
              onChangeText={(val) => setUsername(val)}
            />
          </View>
          <View style={style.userInputContainer}>
            <Icon
              name='lock'
              style={style.passIcon}
            />
            <TextInput
              style={style.passInput}
              value={password}
              placeholder='Password'
              secureTextEntry={isPassSecured}
              onChangeText={(val) => setPassword(val)}
            />
            <IconFeather
              name={isPassSecured ? 'eye' : 'eye-off'}
              style={style.eyeIcon}
              onPress={() => setIsPassSecured(!isPassSecured)}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleForgotPassword()}
        >
          <Text style={style.textInput}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={style.loginButtonContainer}
        onPress={() => handleEmailAndPasswordLogin()}
      >
        <Text style={style.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={style.socialContainer}>
        <Text style={style.socialText}>Or Sign Up Using</Text>
        <View style={style.socialButtons}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={style.appButtonContainer}
            onPress={() => onGoogleButtonPress()}
          >
            <Image source={require('../../assets/images/Google.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={style.appButtonContainer}
            onPress={() => onFacebookButtonPress()}
          >
            <Image source={require('../../assets/images/Facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={style.appButtonContainer}
            onPress={() => onMicrosoftButtonPress()}
          >
            <Image source={require('../../assets/images/Microsoft.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={style.appButtonContainer}
            onPress={() => onAppleButtonPress()}
          >
            <Image source={require('../../assets/images/Apple.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onAccountCreate()}
      >
        <View style={style.noAccount}>
          <Text>Dont have an account?</Text>
          <Text style={style.create}>Create</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

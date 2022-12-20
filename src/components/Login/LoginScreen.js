import { View, ToastAndroid, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

import { GoogleSingInConfigs } from '../../configs/google/googleSignInConfig'
import { LoginScreenStyle } from './LoginScreenStyle'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import { delay } from 'lodash'

const LoginScreen = ({ navigation }) => {
  const style = LoginScreenStyle
  GoogleSignin.configure(GoogleSingInConfigs)

  const [loading, setLoading] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isPassSecured, setIsPassSecured] = useState(true)

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  const handleNavigateToTabs = () => navigation.navigate('TabsNavigator')

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
      const credential = auth.GoogleAuthProvider.credential(userInfo.idToken)
      await auth()
        .signInWithCredential(credential)
        .then(() => {
          setLoading(true)
          delay(handleNavigateToTabs, 1000)
        })
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
    <>
      {!loading ? (
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
                  keyboardType='email-address'
                  onChangeText={(val) => setUsername(val)}
                  placeholder='E-mail'
                  style={style.userInput}
                  value={username}
                />
              </View>
              <View style={style.userInputContainer}>
                <Icon
                  name='lock'
                  style={style.passIcon}
                />
                <TextInput
                  onChangeText={(val) => setPassword(val)}
                  placeholder='Password'
                  secureTextEntry={isPassSecured}
                  style={style.passInput}
                  value={password}
                />
                <IconFeather
                  name={isPassSecured ? 'eye' : 'eye-off'}
                  onPress={() => setIsPassSecured(!isPassSecured)}
                  style={style.eyeIcon}
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
            onPress={() => handleEmailAndPasswordLogin()}
            style={style.loginButtonContainer}
          >
            <Text style={style.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={style.socialContainer}>
            <Text style={style.socialText}>Or Sign Up Using</Text>
            <View style={style.socialButtons}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onGoogleButtonPress()}
                style={style.appButtonContainer}
              >
                <Image source={require('../../assets/images/Login/Google.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onFacebookButtonPress()}
                style={style.appButtonContainer}
              >
                <Image source={require('../../assets/images/Login/Facebook.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onMicrosoftButtonPress()}
                style={style.appButtonContainer}
              >
                <Image source={require('../../assets/images/Login/Microsoft.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onAppleButtonPress()}
                style={style.appButtonContainer}
              >
                <Image source={require('../../assets/images/Login/Apple.png')} />
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
      ) : (
        <>
          <Text>Loading</Text>
        </>
      )}
    </>
  )
}

export default LoginScreen

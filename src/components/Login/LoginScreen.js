import { View, ToastAndroid, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

import { GoogleSingInConfigs } from '../../configs/google/googleSignInConfig'
import { LoginScreenStyle } from './LoginScreenStyle'

import Icon from 'react-native-vector-icons/Ionicons'
import { delay } from 'lodash'

const LoginScreen = ({ navigation }) => {
  const style = LoginScreenStyle
  GoogleSignin.configure(GoogleSingInConfigs)

  const [loading, setLoading] = useState(false)

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  const handleNavigateToTabs = () => navigation.navigate('TabsNavigator')

  const loginAnonymous = async () => {
    await auth()
      .signInAnonymously()
      .then(() => {
        setLoading(true)
        delay(handleNavigateToTabs, 1000)
      })
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
      } else if (error.code === statusCodes.IN_PROGRESS) {
        showToast('Sing In is already in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        showToast('Play Services Not Available')
      } else {
        showToast('Unknown error')
      }
    }
  }

  return (
    <>
      {!loading ? (
        <View style={style.container}>
          <View style={style.loginContainer}>
            <Text
              adjustsFontSizeToFit
              style={style.loginText}
            >
              Login
            </Text>
          </View>
          <View style={style.socialContainer}>
            <View style={style.socialButtons}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => loginAnonymous()}
                style={style.anonButtonContainer}
              >
                <View style={style.signanonImage}>
                  <Icon
                    color={'#868E9F'}
                    name='person'
                    size={28}
                    style={style.signInanonImage}
                  />
                </View>
                <Text style={style.signanonText}>Sign in Anonymously</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                  color: '#000',
                }}
              >
                Or
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onGoogleButtonPress()}
                style={style.googleButtonContainer}
              >
                <View style={style.signGoogleImage}>
                  <Image
                    source={require('../../assets/images/Login/Google.png')}
                    style={style.signInGoogleImage}
                  />
                </View>
                <Text style={style.signGoogleText}>Sign in with Google</Text>
              </TouchableOpacity>
              <Text
                adjustsFontSizeToFit
                numberOfLines={2}
                style={style.noteText}
              >
                Note: Anonymous login will keep your account until you sing out!
              </Text>
            </View>
          </View>
          <View style={{ height: '20%' }} />
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

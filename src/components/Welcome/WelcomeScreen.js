import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import auth, { firebase } from '@react-native-firebase/auth'
import LinearGradient from 'react-native-linear-gradient'

import recyclifyLogo from '../../assets/images/appLogo.png'
import firebaseConfig from '../../configs/firebase/firebaseWebConfig'
import { WelcomeScreenStyle } from './WelcomeScreenStyle'

const WelcomeScreen = ({ navigation }) => {
  const style = WelcomeScreenStyle
  // Initialization
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

  // Constants
  const [users, setUsers] = useState()

  // Effects
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  // Functions
  function onAuthStateChanged(user) {
    setUsers(user)
  }

  const handlePressToContinue = () => {
    if (!users) {
      navigation.navigate('LoginScreen')
    } else {
      navigation.navigate('MainScreen', { userData: users })
    }
  }

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess()
  //     await GoogleSignin.signOut()
  //     auth()
  //       .signOut()
  //       .then(() => alert('Your are signed out!'))
  //     // setuserInfo([]);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#BBFF62', '#1D6000']} style={style.container}>
      <TouchableOpacity activeOpacity={1} style={style.TouchableOpacity} onPress={handlePressToContinue}>
        <View style={style.logoContainer}>
          <View style={style.logoView}>
            <Image style={style.logoImage} source={recyclifyLogo} />
          </View>
          <Text style={style.logoText}>Welcome to Recyclify</Text>
        </View>
        <View style={style.continueView}>
          <Text style={style.continueText}>Press Anywhere To Continue</Text>
        </View>
        <Text style={style.rightArrowText}>→</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default WelcomeScreen


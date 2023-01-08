import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import auth from '@react-native-firebase/auth'
import LinearGradient from 'react-native-linear-gradient'
import NetInfo from '@react-native-community/netinfo'

import recyclifyLogo from '../../assets/images/Login/appLogo.png'
import { WelcomeScreenStyle } from './WelcomeScreenStyle'
import Icon from 'react-native-vector-icons/AntDesign'

const WelcomeScreen = ({ navigation }) => {
  const style = WelcomeScreenStyle
  // Constants
  const [users, setUsers] = useState()
  const [isConnectedToNet, setIsConnectedToNet] = useState(false)

  // Effects
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  useEffect(() => {
    const internetEventListener = NetInfo.addEventListener((state) => {
      setIsConnectedToNet(state.isInternetReachable)
    })
    return internetEventListener
  }, [])

  // Functions
  function onAuthStateChanged(user) {
    setUsers(user)
  }

  const handlePressToContinue = () => {
    if (isConnectedToNet === true) {
      if (!users) {
        navigation.navigate('LoginScreen')
      } else {
        navigation.navigate('TabsNavigator', { userData: users })
      }
    } else {
      ToastAndroid.showWithGravity('There is no access to internet. Activate mobile data or wi-fi!', 3, 35)
    }
  }

  return (
    <LinearGradient
      colors={['#BBFF62', '#1D6000']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={style.container}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handlePressToContinue()}
        style={style.TouchableOpacity}
      >
        <View style={style.logoContainer}>
          <View style={style.logoView}>
            <Image
              source={recyclifyLogo}
              style={style.logoImage}
            />
          </View>
          <Text style={style.logoText}>Welcome to Recyclify</Text>
        </View>
        <View style={style.continueView}>
          {isConnectedToNet ? (
            <Text style={style.continueText}>Press Anywhere To Continue</Text>
          ) : (
            <Text style={style.continueText}>There is no internet connection</Text>
          )}
        </View>
        <Icon
          color={'#fff'}
          name={'arrowright'}
          size={40}
          style={[style.rightArrowText, { color: isConnectedToNet ? 'white' : 'transparent' }]}
        />
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default WelcomeScreen

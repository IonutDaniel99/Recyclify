import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LogBox } from 'react-native'
import CamperaBarcodeScanner from './components/CameraBarcodeScanner/CameraBarcodeScanner'

import ProductDetails from './components/ProductDetailsComponent/ProductDetails'
import WelcomeScreen from './components/Welcome/WelcomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import MainScreen from './components/Main/MainScreen'
import { firebaseApp, firebaseAppInit } from './configs/firebase/firebaseWebConfig'

const Stack = createNativeStackNavigator()

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const App = () => {
  if (!firebaseApp.apps.length) {
    firebaseAppInit()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationTypeForReplace: 'pop',
        }}
      >
        {/* <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} /> */}
        {/* <Stack.Screen name='LoginScreen' component={LoginScreen} /> */}
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='CameraBarcodeScanner' component={CamperaBarcodeScanner} />
        <Stack.Screen name='ProductDetailsScreen' component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TailwindProvider } from 'tailwind-rn'
import CamperaBarcodeScanner from './src/CameraBarcodeScanner/CameraBarcodeScanner'
import utilities from './tailwind.json'

import Main from './src/Main'
import ProductDetails from './src/ProductDetailsComponent/ProductDetails'
import WelcomeScreen from './src/Welcome/WelcomeScreen'
import LoginScreen from './src/LoginScreen/LoginScreen'

const Stack = createNativeStackNavigator()

const App = () => (
  <TailwindProvider utilities={utilities}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='MainScreen' component={Main} />
        <Stack.Screen name='CameraBarcodeScanner' component={CamperaBarcodeScanner} />
        <Stack.Screen name='ProductDetailsScreen' component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  </TailwindProvider>
)

export default App

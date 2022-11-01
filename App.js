import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import CamperaBarcodeScanner from './src/CameraBarcodeScanner/CameraBarcodeScanner'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'

import Main from './src/Main'
import ProductDetails from './src/ProductDetailsComponent/ProductDetails'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen name='CameraBarcodeScanner' component={CamperaBarcodeScanner} />
          <Stack.Screen name='ProductDetailsScreen' component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  )
}

export default App

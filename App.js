import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import CamperaBarcodeScanner from './src/CameraBarcodeScanner/CameraBarcodeScanner'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from './src/Main'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='CameraBarcodeScanner' component={CamperaBarcodeScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

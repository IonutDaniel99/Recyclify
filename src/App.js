import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TailwindProvider } from 'tailwind-rn'
import { firebase } from '@react-native-firebase/auth'
import { LogBox } from 'react-native'
import CamperaBarcodeScanner from './components/CameraBarcodeScanner/CameraBarcodeScanner'
import utilities from '../tailwind.json'

import ProductDetails from './components/ProductDetailsComponent/ProductDetails'
import WelcomeScreen from './components/Welcome/WelcomeScreen'
import LoginScreen from './components/LoginScreen/LoginScreen'
import MainScreen from './components/Main/MainScreen'

const Stack = createNativeStackNavigator()
const firebaseConfig = {
  apiKey: 'AIzaSyA-grsnwv37u2G0mvHeoew4A14PsblAP-A',
  authDomain: 'recyclify-10410.firebaseapp.com',
  databaseURL: 'https://recyclify-10410-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'recyclify-10410',
  storageBucket: 'recyclify-10410.appspot.com',
  messagingSenderId: '804203372642',
  appId: '1:804203372642:web:5402e04b70c37f4167313b',
}
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='MainScreen' component={MainScreen} />
          <Stack.Screen name='CameraBarcodeScanner' component={CamperaBarcodeScanner} />
          <Stack.Screen name='ProductDetailsScreen' component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  )
}

export default App

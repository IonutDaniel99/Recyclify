import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from '../components/Welcome/WelcomeScreen'
import LoginScreen from '../components/Login/LoginScreen'

import TabsNavigatorComponent from './TabsNavigatorComponent'
import ProductAdd from '../components/ProductAdd/ProductAdd'
const Stack = createNativeStackNavigator()

const ScreenNavigatorComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName='WelcomeScreen'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'pop',
      }}
    >
      <Stack.Screen
        component={WelcomeScreen}
        name='WelcomeScreen'
      />
      <Stack.Screen
        component={LoginScreen}
        name='LoginScreen'
      />
      <Stack.Screen
        component={TabsNavigatorComponent}
        name='TabsNavigator'
      />
      <Stack.Screen
        component={ProductAdd}
        name='ProductAdd'
      />
    </Stack.Navigator>
  )
}

export default ScreenNavigatorComponent

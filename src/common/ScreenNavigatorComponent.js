import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from '../components/Welcome/WelcomeScreen'
import LoginScreen from '../components/Login/LoginScreen'

import TabsNavigatorComponent from './TabsNavigatorComponent'
import ProductAdd from '../components/ProductAdd/ProductAdd'
const Stack = createNativeStackNavigator()

const ScreenNavigatorComponent = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'pop',
      }}
      initialRouteName='WelcomeScreen'
    >
      <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
      />
      <Stack.Screen
        name='TabsNavigator'
        component={TabsNavigatorComponent}
      />
      <Stack.Screen
        name='ProductAdd'
        component={ProductAdd}
      />
    </Stack.Navigator>
  )
}

export default ScreenNavigatorComponent

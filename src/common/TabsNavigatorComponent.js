import React from 'react'

import ProductDetails from '../components/ProductDetailsComponent/ProductDetails'

import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PorfileScreen from '../components/Profile/ProfileScreen'
import CameraBarcodeScanner from '../components/CameraBarcodeScanner/CameraBarcodeScanner'
import SettingsScreen from '../components/Settings/SettingsScreen'
import Home from '../components/Home/HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator()

const TabsNavigatorComponent = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationTypeForReplace: 'pop',
        }}
        initialRouteName='HomeScreen'
        backBehavior='none'
        sceneAnimationEnabled='true'
        barStyle={{ backgroundColor: '#007500' }}
      >
        <Tab.Screen
          name='ProfileScreen'
          component={PorfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon
                name='user'
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name='CameraBarcodeScanner'
          component={CameraBarcodeScanner}
          options={{
            tabBarLabel: 'Scan',
            tabBarIcon: ({ color }) => (
              <Icon
                name='camera'
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name='HomeScreen'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon
                name='home'
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name='ProductDetailsScreen'
          component={ProductDetails}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({ color }) => (
              <Icon
                name='file'
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name='SettingsScreen'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Icon
                name='settings'
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default TabsNavigatorComponent

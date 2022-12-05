import React from 'react'

import ProductDetails from '../components/ProductDetailsComponent/ProductDetails'

import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PorfileScreen from '../components/Profile/ProfileScreen'
import CameraBarcodeScanner from '../components/CameraBarcodeScanner/CameraBarcodeScanner'
import SettingsScreen from '../components/Settings/SettingsScreen'
import Home from '../components/Home/HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../components/Home/HomeScreen'
import { Text } from 'react-native'

const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator()

const TabsNavigatorComponent = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationTypeForReplace: 'pop',
          tabBarStyle: {
            marginBottom: 25,
            marginHorizontal: 20,
            paddingHorizontal: 20,
            paddingBottom: 5,
            borderRadius: 50,
            height: 60,
          },
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
            tabBarLabel: ({ focused }) => focused && <Text style={{ fontSize: 10 }}>Profile</Text>,
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
            tabBarLabel: ({ focused }) => focused && <Text style={{ fontSize: 10 }}>Scan</Text>,
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
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) => focused && <Text style={{ fontSize: 10 }}>Home</Text>,
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
            tabBarLabel: ({ focused }) => focused && <Text style={{ fontSize: 10 }}>Product</Text>,
            tabBarIcon: ({ color }) => (
              <Icon
                name='box'
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
            tabBarLabel: ({ focused }) => focused && <Text style={{ fontSize: 10 }}>Settings</Text>,
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

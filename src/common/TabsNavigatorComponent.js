import React from 'react'

import ProductDetails from '../components/ProductDetailsComponent/ProductDetails'

import Icon from 'react-native-vector-icons/Feather'
import PorfileScreen from '../components/Profile/ProfileScreen'
import CameraBarcodeScanner from '../components/CameraBarcodeScanner/CameraBarcodeScanner'
import SettingsScreen from '../components/Settings/SettingsScreen'
import HomeScreen from '../components/Home/HomeScreen'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'

const Tab = AnimatedTabBarNavigator()

const TabsNavigatorComponent = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#00B000',
          activeTintColor: '#FEFCF3',
        }}
        appearance={{
          floating: true,
          whenInactiveShow: 'icon-only',
        }}
        initialRouteName='HomeScreen'
        backBehavior='none'
        sceneAnimationEnabled='true'
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
          component={HomeScreen}
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
            tabBarLabel: 'Product',
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

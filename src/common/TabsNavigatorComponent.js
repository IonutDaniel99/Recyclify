import React from 'react'

import ProductDetails from '../components/ProductDetailsComponent/ProductDetails'

import Icon from 'react-native-vector-icons/Feather'
import PorfileScreen from '../components/Profile/ProfileScreen'
import CameraBarcodeScanner from '../components/CameraBarcodeScanner/CameraBarcodeScanner'
import HomeScreen from '../components/Home/HomeScreen'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'

const Tab = AnimatedTabBarNavigator()

const TabsNavigatorComponent = () => {
  return (
    <>
      <Tab.Navigator
        appearance={{
          floating: true,
          whenInactiveShow: 'icon-only',
        }}
        backBehavior='none'
        initialRouteName='HomeScreen'
        sceneAnimationEnabled='true'
        tabBarOptions={{
          activeBackgroundColor: '#00B000',
          activeTintColor: '#FEFCF3',
        }}
      >
        <Tab.Screen
          component={HomeScreen}
          name='HomeScreen'
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon
                color={color}
                name='home'
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          component={CameraBarcodeScanner}
          name='CameraBarcodeScanner'
          options={{
            tabBarLabel: 'Scan',
            tabBarIcon: ({ color }) => (
              <Icon
                color={color}
                name='camera'
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          component={ProductDetails}
          name='ProductDetailsScreen'
          options={{
            tabBarLabel: 'Product',
            tabBarIcon: ({ color }) => (
              <Icon
                color={color}
                name='box'
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          component={PorfileScreen}
          name='ProfileScreen'
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon
                color={color}
                name='user'
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

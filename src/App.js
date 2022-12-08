import React, { useEffect } from 'react'

import { BackHandler, LogBox } from 'react-native'

import { firebaseApp, firebaseAppInit } from './configs/firebase/firebaseWebConfig'

import { NavigationContainer } from '@react-navigation/native'
import ScreenNavigatorComponent from './common/ScreenNavigatorComponent'
import { handleHardwareBackAction } from './helpers/handleBackButton'

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const App = () => {
  if (!firebaseApp.apps.length) {
    firebaseAppInit()
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleHardwareBackAction)
    return () => BackHandler.removeEventListener('hardwareBackPress', handleHardwareBackAction)
  }, [])

  return (
    <NavigationContainer>
      <ScreenNavigatorComponent />
    </NavigationContainer>
  )
}

export default App

import { View, Text } from 'react-native'
import React from 'react'
import { firebase } from '@react-native-firebase/auth'

const PorfileScreen = () => {
  const { uid } = firebase.auth().currentUser
  return (
    <View>
      <Text>{uid}</Text>
    </View>
  )
}
export default PorfileScreen

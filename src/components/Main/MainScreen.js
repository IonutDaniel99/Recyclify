import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { firebase } from '@react-native-firebase/auth'

const MainScreen = ({ navigation, route }) => {
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    setUserDetails(route.params.userData)
  }, [])

  const handleScanBarCode = () => {
    navigation.navigate('CameraBarcodeScanner')
  }

  const handleInsertBarCode = () => {
    navigation.navigate('ProductDetailsScreen', { text: '156181351531' })
    // console.log(firebase.auth().currentUser.uid)
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.container}>
        <Button title='Scan BarCode' onPress={handleScanBarCode} />
        <Button title='Insert BarCode' onPress={handleInsertBarCode} />
        {userDetails?.user ? <Text> {userDetails?.user.name} </Text> : <Text> {userDetails?.displayName} </Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  container: {
    width: 200,
    maxHeight: 150,
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

export default MainScreen

import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

const MainScreen = ({ navigation, route }) => {
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    setUserDetails(route.params.userData)
    console.log(route.params.userData)
  }, [])

  const handleScanBarCode = () => {
    navigation.navigate('CameraBarcodeScanner')
  }

  const handleInsertBarCode = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => console.log(data))
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

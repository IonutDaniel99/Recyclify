import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

export default function Main({ navigation }) {
  GoogleSignin.configure({
    webClientId: '804203372642-40slgemmask7bfccfqus38anq5h1knpt.apps.googleusercontent.com',
  })

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn()

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential)
  }

  const handleScanBarCode = () => {
    console.log('test')
    navigation.navigate('CameraBarcodeScanner')
  }

  const handleInsertBarCode = () => {
    navigation.navigate('ProductDetailsScreen', { text: 'hello' })
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.container}>
        <Button title='Scan BarCode' onPress={handleScanBarCode} />
        <Button title='Insert BarCode' onPress={handleInsertBarCode} />
        <Button title='Google Sign-In' onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    maxHeight: 150,
    width: 200,
  },
})

import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { firebase } from '@react-native-firebase/auth'
import { nullOrCreateCollectionsOnFirebase } from '../../helpers/firebaseHelpers'

const HomeScreen = () => {
  const {
    displayName,
    email,
    emailVerified,
    phoneNumber,
    metadata: { creationTime, lastSignInTime },
    photoURL,
    uid,
  } = firebase.auth().currentUser

  useEffect(() => {
    nullOrCreateCollectionsOnFirebase(userTemplate)
    return () => {}
  }, [])

  const userTemplate = {
    [uid]: {
      userId: uid,
      latestProductsScanned: { 0: 0 },
      totalProductsScanned: {
        ewaste: 0,
        plastic: 0,
        metal: 0,
        glass: 0,
        paper: 0,
        organic: 0,
      },
      creationTime: creationTime,
      lastSignInTime: lastSignInTime,
      photoURL: photoURL,
      email: email,
      displayName: displayName,
      emailVerified: emailVerified,
      phoneNumber: phoneNumber,
    },
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.container}>
        <Text style={styles.text}>d </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxHeight: 150,
    width: 200,
  },

  fullScreen: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
})

export default HomeScreen

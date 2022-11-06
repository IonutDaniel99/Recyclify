import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import auth, { firebase } from '@react-native-firebase/auth'

import recyclifyLogo from '../../assets/images/appLogo.png'
import firebaseConfig from '../../configs/firebase/firebaseWebConfig'

const WelcomeScreen = ({ navigation }) => {
  // Initialization
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

  // Constants
  const [users, setUsers] = useState()

  // Effects
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  // Functions
  function onAuthStateChanged(user) {
    setUsers(user)
  }

  const handlePressToContinue = () => {
    if (!users) {
      navigation.navigate('LoginScreen')
    } else {
      navigation.navigate('MainScreen', { userData: users })
    }
  }

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess()
  //     await GoogleSignin.signOut()
  //     auth()
  //       .signOut()
  //       .then(() => alert('Your are signed out!'))
  //     // setuserInfo([]);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.continueButton} onPress={handlePressToContinue}>
        <View style={styles.continueView}>
          <Text style={styles.continueText}>Press Here to Continue</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.logoView}>
        <Image style={styles.logoImage} source={recyclifyLogo} />
        <Text style={styles.logoText}>Recyclify</Text>
      </View>
      {/* {!users && <Button title='Catre Login' onPress={handleLoginScreenRedirect} />}
      {users && <Button title='Catre Main' onPress={handleMainScreen} />} */}
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  continueButton: {
    backgroundColor: '#f1f1f1',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  continueText: {
    alignItems: 'flex-end',
    color: 'black',
    display: 'flex',
    fontSize: 20,
    fontWeight: '600',
    margin: 24,
  },
  continueView: {
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
    top: '65%',
  },
  logoImage: {
    height: 120,
    width: 120,
    zIndex: 10,
  },
  logoText: {
    alignItems: 'flex-end',
    color: 'black',
    display: 'flex',
    fontSize: 24,
    fontWeight: '500',
    margin: 24,
  },
  logoView: {
    alignItems: 'center',
    display: 'flex',
    height: 200,
    justifyContent: 'center',
    top: '20%',
    width: '100%',
  },
})

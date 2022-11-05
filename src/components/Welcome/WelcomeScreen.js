import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import auth, { firebase } from '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA-grsnwv37u2G0mvHeoew4A14PsblAP-A',
  authDomain: 'recyclify-10410.firebaseapp.com',
  databaseURL: 'https://recyclify-10410-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'recyclify-10410',
  storageBucket: 'recyclify-10410.appspot.com',
  messagingSenderId: '804203372642',
  appId: '1:804203372642:web:5402e04b70c37f4167313b',
}

const WelcomeScreen = ({ navigation }) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  const [users, setUsers] = useState()
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  function onAuthStateChanged(user) {
    setUsers(user)
  }

  const handleLoginScreenRedirect = () => {
    // console.log('Catre LoginScreen')
    navigation.navigate('LoginScreen')
  }

  const handleMainScreen = () => {
    // console.log('Catre LoginScreen')
    navigation.navigate('MainScreen', { userData: users })
  }

  // const signOut = async () => {
  //   try {
  //     console.log('avem')
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
    <View>
      {!users && <Button title='Catre Login' onPress={handleLoginScreenRedirect} />}
      {users && <Button title='Catre Main' onPress={handleMainScreen} />}
      <Text>Salut</Text>
    </View>
  )
}

export default WelcomeScreen

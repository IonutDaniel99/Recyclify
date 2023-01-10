import app from '@react-native-firebase/app'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA-grsnwv37u2G0mvHeoew4A14PsblAP-A',
  authDomain: 'recyclify-10410.firebaseapp.com',
  databaseURL: 'https://recyclify-10410-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'recyclify-10410',
  storageBucket: 'recyclify-10410.appspot.com',
  messagingSenderId: '804203372642',
  appId: '1:804203372642:web:5402e04b70c37f4167313b',
}

if (!app.apps.length) {
  app.initializeApp(firebaseConfig)
}

export const firebaseApp = app
export const firebaseDb = database
export const firebaseAuth = auth

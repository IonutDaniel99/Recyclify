import { firebase } from '@react-native-firebase/auth'
import { firebaseDb } from '../configs/firebase/firebaseWebConfig'
import { mockProduct } from '../mocks/mockProd'

export const currentUserInfo = firebase.auth().currentUser

export const nullOrCreateCollectionsOnFirebase = (userTemplate) => {
  const { userId } = Object.values(userTemplate)[0]
  firebaseDb()
    .ref(`users/${userId}/`)
    .once('value', (snapshot) => {
      if (!snapshot.exists()) {
        firebaseDb().ref('users/').update(userTemplate)
      }
    })
  firebaseDb().ref('products/').update(mockProduct)
  firebaseDb().ref('statistics/').update({ 'mockStatistics': 0 })
}
export const getCurrentUserStatistics = (uid) => firebaseDb().ref(`users/${uid}/`).once('value')

export const writeDataToFirebase = (path, data) => {
  firebaseDb().ref(`${path}/`).set({ 'latest_products': data })
}

export const writeDataToUser = (uid, product) => {
  const date = Math.floor(new Date().getTime())
  firebaseDb()
    .ref(`users/${uid}/latestProductsScanned`)
    .update({ [product.barCode]: date })
  firebaseDb().ref(`users/${uid}/totalProductsScanned/`).child(product.ecoType).set(firebaseDb.ServerValue.increment(1))
}

export const getProductOrNull = (productCodeNumber) => firebaseDb().ref(`products/${productCodeNumber}`).once('value')

export const saveProductToFirebase = (productObject) => firebaseDb().ref('products/').update(productObject)

export const resetUserTotalProductsScanned = (uid) =>
  firebaseDb().ref(`users/${uid}/totalProductsScanned`).update({
    ewaste: 0,
    plastic: 0,
    metal: 0,
    glass: 0,
    paper: 0,
    organic: 0,
  })

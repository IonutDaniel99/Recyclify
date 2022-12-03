import { firebaseDb } from '../configs/firebase/firebaseWebConfig'
import { mockProduct } from '../mocks/mockProd'

export const nullOrCreateCollectionsOnFirebase = (userTemplate, uid) => {
  firebaseDb()
    .ref(`users/${uid}`)
    .once('value')
    .then((x) => {
      if (!x.val().userId) firebaseDb().ref('users/').update(userTemplate)
    })

  firebaseDb().ref('products/').update(mockProduct)
  firebaseDb().ref('statistics/').update({ 'mockStatistics': 0 })
}

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

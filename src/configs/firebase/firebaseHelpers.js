import { mockProduct } from '../../mocks/mockProd'
import { firebaseDb } from './firebaseWebConfig'

export const nullOrCreateCollectionsOnFirebase = () => {
  firebaseDb().ref('users/').update({ 'mockUser': 0 })
  firebaseDb().ref('products/').update({ 'mockProduct': mockProduct })
}

export const writeDataToFirebase = (path, data) => {
  firebaseDb().ref(`${path}/`).set({ 'latest_products': data })
}

export const getProductOrNull = (data) => firebaseDb().ref(`products/${data}`).once('value')

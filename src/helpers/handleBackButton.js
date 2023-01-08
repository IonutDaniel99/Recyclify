import { Alert } from 'react-native'
import RNExitApp from 'react-native-exit-app'

export const handleHardwareBackAction = () => {
  Alert.alert('Hold on!', 'Are you sure you want to go back?', [
    {
      text: 'Cancel',
      onPress: () => null,
      style: 'cancel',
    },
    { text: 'YES', onPress: () => RNExitApp.exitApp() },
  ])
  return true
}

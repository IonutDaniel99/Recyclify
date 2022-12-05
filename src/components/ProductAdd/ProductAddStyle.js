import { StyleSheet } from 'react-native'

export const ProductAddStyle = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  BackAndTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center',
    backgroundColor: '#2BA863',
  },

  BackIconStyle: {
    height: '100%',
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
  },
  AddProductTextView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  AddProductText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
})

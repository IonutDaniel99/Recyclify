import { StyleSheet } from 'react-native'

export const ProductDetailsStyle = StyleSheet.create({
  screenContainer: {},

  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  searchInput: {
    borderBottomLeftRadius: 10,
    borderColor: '#b2b2b2',
    borderTopLeftRadius: 10,
    borderWidth: 1,
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    paddingLeft: 16,
    width: '70%',
  },
  resetButtonTouchable: {
    position: 'absolute',
    right: 10,
    textDecorationColor: '#000',
    textDecorationLine: 'underline',
  },
  resetButtonText: {
    color: '#6d6d6d',
  },
  searchButtonTouchable: {
    alignItems: 'center',
    backgroundColor: '#17ACB3',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    width: 60,
  },
  searchButtonTouchableDisable: {
    alignItems: 'center',
    backgroundColor: '#17ACB333',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    width: 60,
  },
})

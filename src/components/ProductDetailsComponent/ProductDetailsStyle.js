import { StyleSheet } from 'react-native'

export const ProductDetailsStyle = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  screenContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    paddingHorizontal: 20,
  },
  searchContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  searchInput: {
    borderBottomLeftRadius: 10,
    borderBottomWidth: 2,
    borderColor: '#b2b2b2',
    borderLeftWidth: 1,
    borderTopLeftRadius: 10,
    borderTopWidth: 1,
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    paddingLeft: 16,
    width: '85%',
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
    borderBottomWidth: 1,
    borderColor: '#17ACB3',
    borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderTopWidth: 1,
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    width: 60,
  },
  searchButtonTouchableDisable: {
    alignItems: 'center',
    backgroundColor: '#17ACB333',
    borderBottomRightRadius: 10,
    borderBottomWidth: 2,
    borderColor: '#b2b2b2',
    borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderTopWidth: 1,
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    width: 60,
  },

  initialViewContainer: {},
  latestScannedProductsText: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    marginBottom: 10,
  },

  noHistoryScannedProductsText: {
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },

  latestScannedProductsScrollView: {
    height: '80%',
  },
})

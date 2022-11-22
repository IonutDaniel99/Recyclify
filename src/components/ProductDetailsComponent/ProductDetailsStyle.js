import { StyleSheet } from 'react-native'

export const ProductDetailsStyle = StyleSheet.create({
  screenContainer: {},

  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },

  searchInput: {
    display: 'flex',
    justifyContent: 'center',
    width: '60%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    height: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  searchButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 40,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
})

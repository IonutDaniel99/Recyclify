import { StyleSheet } from 'react-native'

export const ProductDetailsStyle = StyleSheet.create({
  screenContainer: {},

  searchButton: {
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    width: '25%',
  },

  searchContainer: {
    backgroundColor: 'white',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%',
  },

  searchInput: {
    borderBottomLeftRadius: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 10,
    borderTopWidth: 1,
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 16,
    width: '60%',
  },
})

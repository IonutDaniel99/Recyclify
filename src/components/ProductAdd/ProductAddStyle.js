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

  ScrollViewZone: {
    paddingHorizontal: 30,
    marginTop: 20,
    display: 'flex',
  },

  barCodeView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  barCodeText: {
    background: 'blue',
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
  barCodeZone: {
    backgroundColor: 'green',
    width: '50%',
  },

  ProductNameStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#D0D0D0',
    paddingLeft: 20,
  },

  ManufactureNameStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#D0D0D0',
    paddingLeft: 20,
  },

  ProductTypeTextStyle: {
    marginTop: 20,
    color: '#000',
    fontSize: 20,
  },

  ProductTypeZoneStyle: {
    marginTop: 10,
  },

  ProductContainerStyle: {
    borderRadius: 5,
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  AdditionalDetailsContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 4,
  },

  AdditionalDetailsTextStyle: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    paddingBottom: 4,
  },

  AdditionalDetailsBorderStyle: {
    width: '75%',
    borderBottomWidth: 1,
    borderBottomColor: '#2f2f2f55',
  },

  IngredientContainerStyle: {
    padding: 3,
    backgroundColor: '#2980b9C6',
    borderWidth: 1.5,
    color: '#fff',
    borderColor: '#fff',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },

  IngredientTextStyle: {
    marginHorizontal: 15,
    fontWeight: '600',
    color: '#fff',
  },

  IngredientDeleteIconStyle: {
    marginRight: 5,
    color: '#fff',
  },

  AddIngredientContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 25,
    alignItems: 'center',
  },

  AddIngredientInputStyle: {
    width: '70%',
    height: 42,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#D0D0D0',
    paddingLeft: 20,
  },

  AddIngredientButtonStyle: {
    width: 56,
    height: 36,
    borderRadius: 10,
    color: '#fff',
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  containFoodOrLiquidContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  containFoodOrLiquidTextStyle: {
    color: '#000',
  },

  NutritionalValuesContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  NutritionalValuesTextsContainerStyle: {
    display: 'flex',
    width: '70%',
  },
  NutritionalValuesCaloriesStyle: {
    fontWeight: '700',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  NutritionalValuesTextsStyle: {
    marginVertical: 10,
    fontWeight: '800',
    borderBottomWidth: 1,
    borderBottomColor: '#2f2f2f99',
  },
  NutritionalValuesSubTextsStyle: {
    marginLeft: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2f2f2f99',
  },
  NutritionalValuesInputsContainerStyle: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '30%',
  },
  NutritionalValuesCaloriesInputsStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
  },
  NutritionalValuesCaloriesInputStyle: {
    height: 30,
    width: 40,
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#2f2f2f99',
    textAlign: 'right',
    marginRight: 5,
  },
})

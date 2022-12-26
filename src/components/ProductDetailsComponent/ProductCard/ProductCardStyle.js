import { Dimensions, StyleSheet } from 'react-native'

const primaryTextColor = '#494949'
const secondaryTextColor = '#828282'

export const ProductCardStyle = StyleSheet.create({
  CirclePositioning: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#ffffff00',
    borderRadius: 50,
    borderWidth: 2,
    display: 'flex',
    height: 16,
    position: 'absolute',
    right: -34,
    width: 16,
    zIndex: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  productCardContainer: {
    backgroundColor: '#F7F4FA',
    borderRadius: 25,
    height: '95%',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
  },
  nameCompanyPropContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nameCompanyContainer: {
    marginTop: 10,
  },
  productNameText: {
    color: primaryTextColor,
    flexShrink: 1,
    flexWrap: 'wrap',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '800',
    marginBottom: 10,
    maxWidth: 220,
  },
  companyNamePH: {
    color: secondaryTextColor,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '800',
  },
  companyName: {
    color: primaryTextColor,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '800',
  },
  ecoTypeContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    height: 40,
    position: 'relative',
  },
  ecoTypeText: {
    color: primaryTextColor,
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10,
    textAlign: 'center',
    width: 100,
  },
  descriptionContainer: {
    marginBottom: 36,
    position: 'relative',
    width: '90%',
  },
  descriptionText: {
    color: primaryTextColor,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  descriptionContent: {
    backgroundColor: '#FFFFFF',
    borderBottomStartRadius: 20,
    borderColor: 'rgba(16, 63, 23, 0.36)',
    borderStyle: 'solid',
    borderTopEndRadius: 20,
    borderWidth: 1,
    position: 'relative',
  },
  descriptionLongText: {
    color: primaryTextColor,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    padding: 12,
  },
  ingredientContent: {
    position: 'relative',
  },
  ingredientContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#8f8f8f',
    borderRadius: 6,
    borderWidth: 1,
    color: primaryTextColor,
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    padding: 3,
  },
  ingredientText: {
    color: primaryTextColor,
    textAlign: 'center',
  },
  nutritionalContainer: {
    marginBottom: 24,
    position: 'relative',
    width: '90%',
  },
  nutritionalContent: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(16, 63, 23, 0.36)',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    position: 'relative',
  },
  scannedAtContainer: {
    marginBottom: 48,
    position: 'relative',
    width: '90%',
  },
  scannedAtContent: {
    alignItems: 'center',
    backgroundColor: '#ffffff00',
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    position: 'relative',
  },
  scanndedAtDate: {
    alignItems: 'center',
    backgroundColor: '#61B785',
    borderColor: 'rgba(16, 63, 23, 0.36)',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#fff',
    display: 'flex',
    fontWeight: '600',
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'relative',
    textAlignVertical: 'center',
  },
})

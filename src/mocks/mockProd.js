const unixDate = Math.floor(new Date().getTime())
export const mockProduct = {
  '123456789123456789': {
    barCode: '123456789123456789',
    productName: 'Coca Cola Original 500ml',
    ecoType: 'plastic',
    containeFoodOrLiquid: true,
    description:
      'The Coca-Cola Company, American corporation founded in 1892 and today engaged primarily in the manufacture and sale of syrup and concentrate for Coca-Cola, a sweetened carbonated beverage that is a cultural institution in the United States and a global symbol of American tastes. The company also produces and sells other soft drinks and citrus beverages. With more than 2,800 products available in more than 200 countries, Coca-Cola is the largest beverage manufacturer and distributor in the world and one of the largest corporations in the United States. Headquarters are in Atlanta, Georgia.',
    companyName: 'Coca Cola',
    ingredients: ['Water', 'Sugar', 'Color'],
    nutritionalValues: {
      cholesterol: '999',
      dietaryFiber: '8',
      energeticValue: '9999',
      fiber: '68',
      monoFat: '9',
      polyFat: '9',
      protein: '4564',
      salt: '8468',
      saturatedFat: '9',
      sodium: '9999',
      sugar: '8',
      totalCarbohydrate: '999',
      totalFat: '9999',
      transFat: '9',
    },
    createdAt: unixDate,
    modifiedAt: unixDate,
  },
}

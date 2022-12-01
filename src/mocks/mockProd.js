const unixDate = Math.floor(new Date().getTime())
export const mockProduct = {
  mockProduct: {
    barCode: 2341241431,
    prodName: 'Denis',
    ecoType: 'plastic',
    containeFoodOrLiquid: true,
    ingredients: ['sugar', 'milk', 'water'],
    nutritioalValues: {
      carbohydrates: 40,
      fats: 40,
      sugars: 10,
    },
    createdAt: unixDate,
    modifiedAt: unixDate,
  },

  54491472: {
    barCode: 54491472,
    prodName: 'Coca Cola Original 500ml',
    ecoType: 'plastic',
    containeFoodOrLiquid: true,
    manufacturer: 'Coca Cola',
    ingredients: ['sugar', 'milk', 'water'],
    nutritioalValues: {
      carbohydrates: 40,
      fats: 40,
      sugars: 10,
    },
    createdAt: unixDate,
    modifiedAt: unixDate,
  },
}

const mockContainers = ['e-waste', 'plastic', 'metal', 'glass', 'paper', 'organic']

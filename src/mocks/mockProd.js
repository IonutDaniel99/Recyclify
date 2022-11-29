const unixDate = Math.floor(new Date().getTime())
export const mockProduct = {
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
}

const mockContainers = ['e-waste', 'plastic', 'metal', 'glass', 'paper', 'organic']

import Bottle from '../assets/images/AddProduct/bottle.png'
import Metal from '../assets/images/AddProduct/can.png'
import Microchip from '../assets/images/AddProduct/microchip.png'
import Organic from '../assets/images/AddProduct/apple.png'
import Paper from '../assets/images/AddProduct/document.png'
import Plastic from '../assets/images/AddProduct/plastic.png'

export const containerItemsMapper = [
  { label: 'Plastic', value: 'plastic', code: '#3498db', id: 1, icon: Plastic },
  { label: 'Paper', value: 'paper', code: '#2ecc71', id: 2, icon: Paper },
  { label: 'Metal', value: 'metal', code: '#95a5a6', id: 3, icon: Metal },
  { label: 'Electronic', value: 'ewaste', code: '#34495e', id: 4, icon: Microchip },
  { label: 'Glass', value: 'glass', code: '#a8ccd7', id: 5, icon: Bottle },
  { label: 'Organic', value: 'organic', code: '#e67e22', id: 6, icon: Organic },
]

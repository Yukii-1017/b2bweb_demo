/**
 * Where to define the gloable state and maintain all components
 */

import { useState } from 'react'


function State() {

  const [items, setItems] = useState([
      {
        id: 1,
        name: 'a',
        stock: 100,
        img: [
          './imgs/purpleDress.jpg',
          './imgs/purpleDress2.jpg',
        ],
        detail: 'Wonderful purple vitage dress',
      },
      {
        id: 2,
        name: 'b',
        stock: 200,
        img:[
          './imgs/blueDress.jpg',
        ],
        detail: 'Amazing BLUE DRESS',
      }
  ])
}


export default State

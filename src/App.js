import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './card.js';
import Cart from './cart.js';
import {useState} from 'react'


function App() {
  const products = [
    {
      id: 1,
      name: "Guava plant",
      price: 100,
      img: "http://cdn.shopify.com/s/files/1/2378/0773/products/51lPsvZLU_L._SX466_grande.jpg?v=1592396878"

    },
    {
      id: 2,
      name: "Papaya plant",
      price: 200,
      img: "https://www.louiesnursery.com/wp-content/uploads/2017/06/papaya-tree-stock-image.jpg"
    },
    {
      id: 3,
      name: "Neem plant",
      price: 300,
      img: "http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-neem-tree-azadirachta-indica-plant.jpg?v=1634224777"
    },
    {
      id: 4,
      name: "Tulsi plant",
      price: 400,
      img: "https://d2j6dbq0eux0bg.cloudfront.net/images/50759271/2601456577.jpg"
    },
    {
      id: 5,
      name: "Moringa plant",
      price: 500,
      img: "https://assets.echocommunity.org/images/d5bdccac-ed62-40d4-a899-5f989a587eca/ern1-figure-1_original.JPG"
    },
    {
      id: 6,
      name: "seetha plant",
      price: 600,
      img: "https://m.media-amazon.com/images/I/51aV8JF86YL._SX466_.jpg"
    },
  ]

  const [cartItems,setCartItems] = useState([])

  let addToCart = (product) => {
    setCartItems([...cartItems,product])
  }

  let removeFromCart = (product) => {
    const indexVal = cartItems.findIndex(obj => obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems])
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            {
              products.map((product) => {
                return <Card product={product} addToCart={addToCart} />
              })
            }
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
          </div>
        </div>
        <div className='col-lg-4'>
          <h3>Cart🛒 </h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>


  );
}

export default App;

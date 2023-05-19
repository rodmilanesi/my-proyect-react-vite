import { Link } from 'react-router-dom'


function App() {
  

  return (
    <>
      <div>
        <Link to = "/cart">
          <button>Carrito</button>
        </Link>
        <Link to = "/checkout">
          <button>Checkout</button>
        </Link>
        </div> 
    </>
  )
}

export default App

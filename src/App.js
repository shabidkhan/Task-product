import './App.css';
import Product from './components/Product';
import Cart from './components/cart'
import { useState } from 'react';


function App() {
  const [carts, setCarts] = useState(false);
  return (
    <div className="">
    <div className="nav">
      <button style={{height :"40px", width :"70px"}} onClick={() => setCarts((precart=>!precart))}>{carts?"Home":"Cart"}</button>
    </div>
    {
      carts?<Cart/>:<Product/>
    }
    
    </div>
  );
}

export default App;

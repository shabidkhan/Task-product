import React, { useContext } from 'react'
import data from '../utils/data';
import { Store } from '../utils/Store';
import ProductItem from './productItem';

function Product() {
    const {state,dispatch} = useContext(Store)

    const addToCartHandler = async (product) => {
      const existItem = state.cart.cartItems.find((x) => x._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      
      
        dispatch({type:"CART_ADD_ITEM",payload:{...product, quantity}}) 
    
    }
    return (
      <div className="">
       <h1 className="Main-Text">Products</h1>
      <div className="main-card">
      {data.products.map((product) => (
            <div key={product.name}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              />          
              {console.log(product)}
              <h1>{product.name}</h1>
  
            </div>
          ))}
        </div>
      </div>
    );
}

export default Product
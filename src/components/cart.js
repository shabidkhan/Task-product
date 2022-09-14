import React, { useContext } from 'react'
import { Store } from '../utils/Store';

function CartScreen() {
    const {state,dispatch} =useContext(Store);
    const {cartItems} = state.cart
    
    const removeItemHandler = (item) => {
      dispatch({type:"CART_REMOVE_ITEM",payload: item})
    }
    
    return (
      <div className="Main-Text">
        <h1>
          Shopping Cart
        </h1>
        {
          
          cartItems.length ===0?
          (
            <div>
              Cart is empty. 
              
                <a href="/"> Go Shopping</a>
              
            </div>
          ):
          (

            <table className="table">
                {/* <thead> */}
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                
                    {
                        cartItems.map(item =>(
                            <tr key={item.id}>
                                <td>
                                    <img style={{width:"50px", height:"50px"}} alt={item.name} src={item.image}></img>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td >
                                    <button style={{height:"30px", width:"30px"}} onClick={() =>removeItemHandler(item)}>
                                    <h3>X</h3>
                                </button>
                                </td>
                            </tr>
                        )
                    )
                    }
                    
            </table>
            
          )
        }
      </div>
    )
  }

export default CartScreen;
import React from 'react';

  export default function ProductItem({ product, addToCartHandler }) {
    return (
      <>
        <div className="card">
            <a href={`/product/${product.slug}`} >
            <div>
                <img src={product.image} alt={product.name} style={{width:"100%"}}></img>
            </div> 
            </a>
        
        <div className="container">
            <h3><b>{product.name}</b></h3>
            <p>{product.rating}</p>
            <h3>${product.price}</h3>
        </div>
        <div>
        <button
            size="small"
           color="primary"
             onClick={() => addToCartHandler(product)}
          >
          Add to cart
          </button>
        </div>
        </div>
        {product.id===3 && <h1>djsfhkjhdskjhfkjsadhkj</h1>}
        {console.log(product.id===3)}
      </>
        
    
    );
  }
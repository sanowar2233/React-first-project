import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
  
    const [products, setProducts]=useState([])

    const [cart,setCart]=useState([])
    

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    const handleAddToCartClick=(product)=>{
        // console.log(product)
        // cart.push(product)
        const newCart =[...cart,product]
        setCart(newCart)

    }

    return (
        <div className='shop-container'>


            <div className='products-container'>
                {
                    products.map(product=><Product key={product.id} 
                        product={product}
                        handleAddToCartClick={handleAddToCartClick}
                        ></Product>)
                }


            </div>

            <div className='cart-container'>

                <h4>Order Summary</h4>
                <p>Selected Item:{cart.length}</p>

            </div>
          
        </div>
    );
};

export default Shop;
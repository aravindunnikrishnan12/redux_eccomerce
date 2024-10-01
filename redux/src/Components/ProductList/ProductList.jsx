// src/Components/ProductList/ProductList.jsx


import './ProductList.css';
import products from '../../Api/products.json'

import CartButtons from './CartButtons';
import {useSelector} from 'react-redux';

function ProductList() {
  const {cartList}=useSelector((state)=>state.cart);
  console.log("cartList",cartList)

  return (
    <section className="container">
      <h1>Prodfjsdnsdn</h1>
      {products.map((product,key)=>(
        <div className="product-container" key={key}>
          <img src={product.image} alt=''/>
          <h3>{product.title}</h3>
         <CartButtons product={product}/>
        
        
        </div>
      ))}
    </section>
  );
}

export default ProductList;

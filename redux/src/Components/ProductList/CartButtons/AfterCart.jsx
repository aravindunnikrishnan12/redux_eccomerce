// src/Components/ProductList/CartButtons/AfterCart.jsx


import { decrement, increment } from '../../../redux/cart';
import './CartButtons.css';

import { useDispatch, useSelector } from "react-redux";

const AfterCart = ({ cartCount, productID }) => {
  const disptach = useDispatch();

  return (
     <div className="after-cart">
        <button className="cart-counter-button" onClick={() => disptach(decrement(productID))}>
           -
        </button>
        <div className="cart-count">{cartCount}</div>
        <button className="cart-counter-button" onClick={() => disptach(increment(productID))}>
           +
        </button>
     </div>
  );
};

export default AfterCart;

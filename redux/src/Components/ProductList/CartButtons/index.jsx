// src/Components/ProductList/CartButtons/index.jsx

import BeforeCart from './BeforeCart';
import AfterCart from './AfterCart';
import { useMemo } from 'react';
import  { useContext } from "react";
import { CartContext } from "../../../context/cart/cartContext";

const CartButtons = ({ product }) => {
    const { cartList } = useContext(CartContext);
 
    const cartCount = useMemo(() => {
       return cartList?.find((item) => item?.id === product?.id)?.count;
    }, [cartList, product?.id]);
 
    return (
       <>
          {cartCount > 0 ? (
             <AfterCart productID={product?.id} cartCount={cartCount} />
          ) : (
             <BeforeCart product={product} />
          )}
       </>
    );
 };
export default CartButtons
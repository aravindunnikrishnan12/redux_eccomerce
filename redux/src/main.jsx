import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { store } from './redux/store.jsx';
import CartProvider from "./context/cart/cartContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
    <CartProvider>
    <App />
    </CartProvider>
    </Provider>

  </StrictMode>,
)

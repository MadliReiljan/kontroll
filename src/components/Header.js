import React, { useContext } from 'react';
import logo from '../assets/logo.jpg'
import Button from './UI/Button.js'
import { CartContext } from '../store/CartContext';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const handleButtonClick = () => {
    
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly onClick={handleButtonClick}>Cart ({totalCount})</Button>
            </nav>
        </header>
    )
}

export default Header
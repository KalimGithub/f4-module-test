import React from "react";
import Card from "../Components/Card";

const Cart = () => {
    return (
        <div>
            <h1 id="main-heading">My Cart</h1>
            <div className="cart-page">
                <div className="cart-cards">
                    <Card type="Remove From Cart"/>
                </div>
                <div className="checkout">
                    <p>Checkout List</p>
                    <div className="checkout-row">
                        <p>1. shirt</p>
                        <p>$100</p>
                    </div>
                    
                    <hr/>
                    <div className="total-row">
                        <p>Total</p>
                        <p>$500</p>
                    </div>
                    <hr/>
                    <br/>
                    <button id="checkout-btn">Click to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
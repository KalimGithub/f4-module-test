import react from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            <NavLink id="shopping-cart" to="/">Shopping Cart</NavLink>
            <div className="hedear-btn">
                <NavLink to="/" id="home-btn">Home Page</NavLink>
                <NavLink to="/cart" id="cart-btn">Cart Page</NavLink>
            </div>
        </div>
    )
}

export default Header
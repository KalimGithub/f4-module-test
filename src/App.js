import React from "react";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/f4-module-test" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                {/* <Cart /> */}
            </Routes>
        </div>
    )
}

export default App
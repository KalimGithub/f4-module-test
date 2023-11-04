import React, {useState, useEffect} from "react";
import Card from "../Components/Card";
import axios from 'axios';


const Home = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                console.log(response.data.products);
                // setTitle(response.data.products[0].title)
                // setPrice(response.data.products[0].price)
                // setThumbnail(response.data.products[0].thumbnail)
                setData(response.data.products)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);


    return (
        <div>
            <h1 id="main-heading">All Items</h1>
            <div className="cards">
                {data.map((item) => 
                <Card title={item.title} price={item.price} thumbnail={item.thumbnail} type="Add To Cart"/>
                )}
            </div>
        </div>
    )
}

export default Home
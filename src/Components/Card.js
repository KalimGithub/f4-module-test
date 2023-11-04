import React from "react";
const Card = ({title, price,thumbnail,type}) => {
    const handleSubmit = () => {
        // response.prventDefault()
    }
    return (
        <div className="cards">
            <div className="card">
                <img src={thumbnail} />
                <p>Title: {title}</p>
                <p>Price: $ {price}</p>
                <button onClick={handleSubmit} id="add-btn">{type}</button>
            </div>
        </div>
    )
}

export default Card
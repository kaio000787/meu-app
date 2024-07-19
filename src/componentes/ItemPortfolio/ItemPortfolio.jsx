import React from "react";

import "./ItemPortfolio.css"

function ItemPortfolio(props) {

    return (
        <div className="item-portfolio">
        <a href={props.link} target="_blank">
           <img src={props.image} alt="capa comeia academy" />
            <p>{props.title}</p>
        </a>
    </div> 
    );
}

export default ItemPortfolio;
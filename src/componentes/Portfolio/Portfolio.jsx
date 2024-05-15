import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";
import portfolio from "./Portfolio.json";


function Portfolio() {   
                  
    return (
        <main>

           {portfolio.map(
               (item,index) => 
                    <ItemPortfolio
                        key={index}
                        link={item.link}
                        image={item.Image + (index + 1)} 
                        title={item.title + (index + 1)}
                    ></ItemPortfolio>  
          )}
    
    </main>

    )
}

export default Portfolio;
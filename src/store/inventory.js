import React from "react";
import Beer from "./beer.js";
import { useState, useEffect } from "react";

export default function Inventory(props) {
  const [activeBeers, setActive] = useState([]);

  useEffect(() => {
    fetch(`https://beerb.herokuapp.com/`)
      .then((response) => response.json())
      .then((data) => getActive(data.taps));
  }, []);

  function getActive(data) {
    let newActive = [];
    data.forEach((e) => {
      let inArray = newActive.includes(e.beer);
      if (inArray) {
      } else {
        newActive.push(e.beer);
        setActive(newActive);
      }
    });
  }

  return (
    <main className="inventory-container">
      {/* {props.products.length === 0 && <Loader />} */}

      {props.beers.map((item) => (
               activeBeers.map((e) => {
                  if(e === item.name) {
                    return <Beer 
                      addToBasket={props.addToBasket} 
                      {...item} 
                      key={item.name}
                      total={props.total}
                      updateTotal={props.updateTotal}
                />
                  }else{
                    return null
                  }})))}    
    </main>
  );
}

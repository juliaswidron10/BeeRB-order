import React from 'react';
// import { useState, useEffect, useRef } from "react";
import Inventory from './inventory.js';
import Basket from './basket'

export const Store = (props) => {
  // const [ data, setData ] = useState([]);
  // const myEl = useRef(null);
  // const [products, setProducts] = useState([]);
  // const [basket, setBasket] = useState([]);

  // // const [start, setStart] = useState(0);

  // useEffect(() => {
  //   fetch(`https://beerb-exam.herokuapp.com/beertypes`)
  //     .then((res) => res.json())
  //     .then(setProducts);
  // });

  // function addToBasket(payload) {
  //   const inBasket = basket.findIndex((item) => item.name === payload.name);
  //   if (inBasket === -1) {
  //     const nextPayload = { ...payload };
  //     nextPayload.amount = 1 ;
  //     setBasket((prevState) => [...prevState, nextPayload]);
  //   } else {
  //     const newBasket = basket.map((item) => {
  //       if (item.name === payload.name) {
  //         item.amount += 1;
  //       }
  //       return item;
  //     });
  //     setBasket(newBasket);
  //   };
  // } 
  return (
    <div className="App">
      <Inventory beers={props.beers} addToBasket={props.addToBasket}  />
      
    </div>
  )
    }

export default Store;

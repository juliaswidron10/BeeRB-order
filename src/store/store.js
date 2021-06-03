import React from 'react';
// import { useState, useEffect, useRef } from "react";
import Inventory from './inventory.js';
// import Basket from './basket'

export const Store = (props) => {

  // function getBeerPrices(){
  //   props.beerPrices.map(e => {
  //     // console.log(e)
  //     if(e.name === beers.name){
  //       beerPrice === beers.price
  //       return beerPrice;
  //     }
  //     console.log(beerPrice)
  //   })

  //  <p>{getBeerPrices(props.name)}</p>
  return (
    <div className="App">
      <Inventory 
        beerPrices={props.beerPrices} 
        total={props.total} 
        beers={props.beers} 
        addToBasket={props.addToBasket} />
      
    </div>
  )
    }

export default Store;

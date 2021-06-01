import React from 'react';
// import { useState, useEffect, useRef } from "react";
import Inventory from './inventory.js';
// import Basket from './basket'

export const Store = (props) => {
  return (
    <div className="App">
      <Inventory beers={props.beers} addToBasket={props.addToBasket}  />
      
    </div>
  )
    }

export default Store;

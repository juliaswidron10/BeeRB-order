import React from 'react';
import Beer from './beer.js';
import {useState, useEffect} from 'react';

export default function Inventory(props) {
  const [activeBeers, setActive] = useState([])

  useEffect(() => {
    setInterval(() =>{ 
      fetch(`https://beerb-exam.herokuapp.com/`)
        .then(response => response.json())
        .then(data => setActive(data.taps)); }
      , 1000)} ,[]);
      // console.log(activeBeers);
  
  // function getactive(){
  //   activeBeers.map(e =>{
  //   if(e.beer === props.name) {
  //     return 'activeBeers'
  //   }else{
  //     return 'notactiveBeers'
  //   }})
  // }
        return (
          <main className="inventory-container">
             {/* {props.products.length === 0 && <Loader />} */}
             {props.beers.map((item) => (
               activeBeers.map(e =>{
                  if(e.beer === item.name) {
                    return <Beer 
                      addToBasket={props.addToBasket} 
                      {...item} 
                      key={item.name}
                      total={props.total}
                />

}})))}
            {/* Displaying all the beers from the database
            {props.beers.map((item) => (
              return <Beer 
                className='nonactiveBeers'
                {...item} 
                
                beerPrices={props.beerPrices} 
                addToBasket={props.addToBasket} 
                key={item.name}/>
            ))} */}
            {/* activeBeers.map(e =>{
                
                if(e.beer === item.name) {}}) */}


          </main>
        );
      }


import React from 'react';
import Beer from './beer.js';

export default function Inventory(props) {

        return (
          <main className="inventory-container">
             {/* {props.products.length === 0 && <Loader />} */}
             {props.beers.map((item) => (
               
              <Beer 
                addToBasket={props.addToBasket} 
                {...item} 
                key={item.name}
                total={props.total}
                />
            ))}
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


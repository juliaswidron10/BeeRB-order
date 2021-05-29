import React from 'react';
import Beer from './beer.js';

export default function Inventory(props) {
        return (
          <main className="ProductList">
            {/* {props.products.length === 0 && <Loader />} */}
            {props.beers.map((item) => (
              <Beer addToBasket={props.addToBasket} {...item} key={item.id} />
            ))}


          </main>
        );
      }


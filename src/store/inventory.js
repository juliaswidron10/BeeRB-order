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

// function Loader() {
//         return <p>Loading...</p>;
//       }
    // constructor(props) {
    //     super(props);
    
    //     const beers = [];
    
    //     for (let i = 0; i < 10; i++) {
    //         beers.push({
    //             name: this.state.1.name,
    //             category: this.state[i].category,
    //             label: this.state[i].label 
    //         });
    //     }
    
    //     this.state = { beers };
    // }


// export default Inventory;
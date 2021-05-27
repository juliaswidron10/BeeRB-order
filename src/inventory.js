import React from 'react';
import Beer from './beer.js';

class Inventory extends React.Component {
 
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

    render(){
        return(
            <div>
               
                <Beer />

            </div>
        )
    }
}

export default Inventory;
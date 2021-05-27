import React from 'react';
// import Beer from './beer.js';
import Inventory from './inventory';

let beers = [];
// class beerObj = {
//   constructor(name, category, label) {
//     this.name = name;
//     this.category = category;
//     this.label = label
//   }
// }

export class Store extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
          beers: [],
        };
      }
      componentDidMount() {
        // Simple GET request using fetch
        const fetchData = () => {
          fetch('https://beerb-exam.herokuapp.com/beertypes')
          .then(response => response.json())
          .then(data => getData(data));
        }
      
    //   getData();
    
    fetchData();
      const getData = (data)  => {
        this.setState(data);
      //   data.forEach( beer => {
      //       // beers.push(beer);
      //       console.log(beers);
      //       this.setState(beers);
      //     //   beers.push({
      //     //     name: beer.name,
      //     //     category: beer.category,
      //     //     label: beer.label 
      //     // });
      //     
      //   })
      // }
      }
    }
    render(){
        return(
            <div>
                {/* <h1>Beer ALALALA</h1> */}
                <Inventory beers={this.state.beers}/>
            </div>
        )
    }
  }

export default Store;

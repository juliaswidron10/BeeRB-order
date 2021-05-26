import React from 'react';
import Beer from './beer.js';
let beers = [];


export class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: {}
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
        // this.setState(data);
        data.forEach( beer => {
            beers.push(beer);
            console.log(beers);
            this.setState(beers);
        })
      }
      
    }
    render(){
        return(
            <div>
                <h1>Beer ALALALA</h1>
                <Beer beer={this.state}></Beer>
            </div>
        )
    }
  }

// export default Store;
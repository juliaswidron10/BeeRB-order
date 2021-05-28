import React from 'react';
import elhefe from '../beers/elhefe.png';
import { Card } from 'antd';
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
const { Meta } = Card;

export default function Beer(props) {

  const [amount, setAmount] = useState(0);

  function handleminus(evt) {
    setAmount((prevState) => {
      return prevState - 1;
    });
  }
  function handleplus(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }
        return(
            <div className="beer-inventory">
                {/* <img src={elhefe} className="beerimg"/>
                <h1>El Hefe</h1> 
                <h2>IPA</h2>
                <p></p>
                <div className="buttons">
                    <p>+</p><h3>1</h3><p>-</p>
                </div>
                <button>Add to Cart</button> */}
                <Card
                hoverable
                style={{ width: 200 }}
                 cover={<img alt="example" src={elhefe} />} >
                <Meta title={props.name} description={props.category} />
                <div className="beer-add">
                
                <MinusCircleOutlined disabled={amount === 0} onClick={handleminus} />
                <h1>{amount}</h1>
                <PlusCircleOutlined onClick={handleplus}/>
                </div>
                <Button onClick={() => props.addToBasket(props)} className="button btn-black beer-button" type="primary">
                    Add
                </Button>
                </Card>,

            </div>
        )
}

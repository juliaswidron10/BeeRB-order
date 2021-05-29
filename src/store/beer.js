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
    if(amount > 0){
      setAmount((prevState) => {
        return prevState - 1;
      });
    }
  }
  function handleplus(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }
        return(
            <div className="beer-inventory">
                <Card
                hoverable
                style={{ width: 200 }}
                 cover={<img alt="example" src={elhefe} />} >
                <Meta title={props.name} description={props.category} />
                <div className="beer-add">
                
                <MinusCircleOutlined  onClick={handleminus} />
                <h1>{amount}</h1>
                <PlusCircleOutlined onClick={handleplus}/>
                </div>
                <Button onClick={(item) => props.addToBasket(props)}  className="button btn-black beer-button" type="primary">
                    Add
                </Button>
                </Card>

            </div>
        )
}

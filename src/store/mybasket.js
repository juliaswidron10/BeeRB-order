import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import {useState} from 'react';

export default function MyBasket(props) {
  //  const [total, setTotal] = useState(0);
  //  function getTotal(amount){
  //    let tot = amount * 75
  //    return tot
  //  }
  console.log(props.basket);
    return (
      <section className="MyBasket">
  
        <ul>
          {props.basket.map((item) => (
            <CartItem
              name={item.name}
              category={item.category}
              amount={item.amount}
              key={item.name}
              label={item.label}
              // total={getTotal(item.amount)}
            />
          ))}
        </ul>
      </section>
    );
  }
  //<CartItem name={item.name} amount={item.amount} />
  //<CartItem {...item} />
  
  function CartItem(props) {
    const [amount, setAmount] = useState(props.amount);

    function handleminus(evt) {
    if(props.amount > 0){
      setAmount((prevState) => {
        return prevState - 1;
      });
    }
  };

  function handleplus(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }
    return (
      <li className="basket-display">
      <img className="image-basket" src={process.env.PUBLIC_URL+`/beers/${props.label}`} alt="beerlabel"/>
      <div className="beer-add"> <MinusCircleOutlined  onClick={handleminus} />
      <p>{amount}</p>
            <PlusCircleOutlined onClick={handleplus}/></div>
     
      <div><h1>{props.name} {props.total}</h1></div>
      </li>
    );
  }
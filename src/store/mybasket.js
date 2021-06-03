import React from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

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
            total={props.total}
            name={item.name}
            category={item.category}
            amount={item.amount}
            key={item.name}
            label={item.label}
          />
        ))}
      </ul>
      <div className="total-basket">
        <h2>Total:</h2>
        <h2 className="totalamount-basket">{props.total} kr</h2>
      </div>
    </section>
  );
}
//<CartItem name={item.name} amount={item.amount} />
//<CartItem {...item} />

function CartItem(props) {
  const [amount, setAmount] = useState(props.amount);
  const [localtotal, setlocalTotal] = useState(amount * 75);

  function getlocalTotal() {
    let newTotal = 0;
    newTotal = amount * 75;
    setlocalTotal(newTotal);
  }
  function handleminus(evt) {
    if (props.amount > 0) {
      setAmount((prevState) => {
        return prevState - 1;
      });
    }
    getlocalTotal();
  }

  function handleplus(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
    getlocalTotal();
  }
  return (
    <li className="basket-display">
      <img className="image-basket" src={process.env.PUBLIC_URL + `/beers/${props.label}`} alt="beerlabel" />
      <p className="itemname-basket">{props.name}</p>
      <div className="beer-add">
        {" "}
        <MinusCircleOutlined onClick={handleminus} />
        <p>{amount}</p>
        <PlusCircleOutlined onClick={handleplus} />
      </div>
      <p className="localtotalprice-basket">{localtotal} kr</p>
    </li>
  );
}

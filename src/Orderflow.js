import React from "react";
import { Steps } from "antd";
import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Header.js";
import { Step1, Step2, Step3, Step4, Step5 } from "./Steps.js";
import { Paymentform } from "./Paymentform.js";
import { useState, useEffect } from "react";

const { Step } = Steps;

const steps = [
  {
    step: 1,
    title: "Select your beer",

    current: 0,
    content: (updateTotal, total, basket, beers, addToBasket, next, current, handlemodal, handlemodal2) => (
      <Step1
        updateTotal={updateTotal}
        total={total}
        basket={basket}
        beers={beers}
        addToBasket={addToBasket}
        next={next}
        current={current}
        handlemodal={handlemodal}
        handlemodal2={handlemodal2}
      />
    ),
  },
  {
    step: 2,
    title: "Place your order",
    current: 1,
    content: (updateTotal, total, basket, beers, addToBasket, next, current, handlemodal, handlemodal2, post) => (
      <Step2
        updateTotal={updateTotal}
        total={total}
        basket={basket}
        beers={beers}
        addToBasket={addToBasket}
        next={next}
        current={current}
        handlemodal={handlemodal}
        handlemodal2={handlemodal2}
        post={post}
      />
    ),
  },
  {
    step: 3,
    title: "A bit of a patience",
    current: 2,
    content: (updateTotal, total, basket, beers, addToBasket, next, current, handlemodal, handlemodal2, post, orderNumber) => (
      <Step3
        updateTotal={updateTotal}
        total={total}
        basket={basket}
        beers={beers}
        addToBasket={addToBasket}
        next={next}
        current={current}
        handlemodal2={handlemodal2}
        post={post}
        orderNumber={orderNumber}
      />
    ),
  },
  {
    step: 4,
    title: "Pick up your order ",
    current: 3,
    content: (updateTotal, total, basket, beers, addToBasket, next, current, handlemodal, handlemodal2, post) => (
      <Step4
        updateTotal={updateTotal}
        total={total}
        basket={basket}
        beers={beers}
        addToBasket={addToBasket}
        next={next}
        current={current}
        handlemodal2={handlemodal2}
        post={post}
      />
    ),
  },
  {
    step: 5,
    title: "Enjoy and repeat!",
    current: 4,
    content: (updateTotal,total, basket, beers, addToBasket, next, current, handlemodal, handlemodal2, post) => (
      <Step5
        updateTotal={updateTotal}
        total={total}
        basket={basket}
        beers={beers}
        addToBasket={addToBasket}
        next={next}
        current={current}
        handlemodal2={handlemodal2}
        post={post}
      />
    ),
  },
];

function Orderflow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [beers, setBeers] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  // const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    fetch(`https://beerb.herokuapp.com/beertypes`)
      .then((res) => res.json())
      .then((res)=> {
        setTimeout(() => {
          setBeers(res);
        }, 3000);
        });
  }, []);

  function addToBasket(payload, amount = 1) {
    const inBasket = basket.findIndex((item) => item.name === payload.name);
    if (inBasket === -1) {
      const nextPayload = { ...payload };
      nextPayload.amount = amount;
      setBasket((prevState) => [...prevState, nextPayload]);
      updateTotal();
    } else {
      const newBasket = basket.map((item) => {
        if (item.name === payload.name) {
          item.amount = amount;
        }
        return item;
      });
      setBasket(newBasket);
      updateTotal();
    }
  }

  function updateTotal() {
    let itemsOrdered = 0;
    setTotal(
      basket.forEach((item) => {
        // console.log(item.amount);
        itemsOrdered = itemsOrdered + item.amount;
      })
    );
    let newTotal = itemsOrdered * 75;
    setTotal(newTotal);
    // return newTotal
  }

  function next() {
    //takes you to the next step
    // console.log("next clicked");
    const nextStep = current + 1;
    setCurrent(nextStep);
  }

  const handlemodal = () => {
    // console.log("handlmodal1");
    setVisible(!visible);
  };

  const handlemodal2 = () => {
    // console.log("handlmodal22222");
    setVisible2(!visible2);
  };

  function post() {
    // post content of basket to heroku database
    const data = basket.map((item) => {
      return { name: item.name, amount: item.amount };
    });
    // console.log(data);

    const postData = JSON.stringify(data);
    fetch("https://beerb.herokuapp.com/order", {
      method: "post",
      body: postData,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "added") {
          // console.log(res);
          // setOrderNumber(res.id);
          setBasket([]);
        }
      });
  }

  return (
    <div className="orderflow">
      <Header />
      {/* conditional rendering */}
      {visible === true && <Paymentform handlemodal={handlemodal} visible={visible} next={next} />}
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content-container">
        {steps.map((item) => (
          <div key={item.title} className={`steps-content ${item.step !== current + 1}`}>
            {" "}
            {item.content(
              updateTotal,
              total,
              basket,
              beers,
              addToBasket,
              next,
              current,
              handlemodal,
              handlemodal2,
              post
              // orderNumber
            )}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Orderflow };

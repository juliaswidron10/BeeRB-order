import React from "react";
import { Steps, Button, message } from "antd";
import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Header.js";

import { Step1, Step2, Step3, Step4, Step5 } from "./Steps.js";
import { Paymentform } from "./Paymentform.js";
// import { Orderpickupmodal } from "./Orderpickupmodal";
import { Beermodal } from "./Beermodal.js";
import { useState, useEffect } from "react";

const { Step } = Steps;


const steps = [
  {
    step: 1,
    title: "Select your beer",

    current: 0,
    content: (basket, beers, addToBasket, next, current, handlemodal, handlemodal2) => <Step1 basket={basket} beers={beers} addToBasket={addToBasket} next={next} current={current} handlemodal={handlemodal}  handlemodal2={handlemodal2} />,

  },
  {
    step: 2,
    title: "Place your order",
    current: 1,
    content:(basket, beers, addToBasket, next, current, handlemodal, handlemodal2) => <Step2 basket={basket} beers={beers} addToBasket={addToBasket} next={next} current={current} handlemodal={handlemodal}  handlemodal2={handlemodal2}/>,
  },
  {
    step: 3,
    title: "A bit of a patience",
    current: 2,
    content: (basket, beers, addToBasket, next, current, handlemodal, handlemodal2) => <Step3 basket={basket} beers={beers} addToBasket={addToBasket} next={next} current={current}  handlemodal2={handlemodal2} />,
  },
  {
    step: 4,
    title: "Pick up your order ",
    current: 3,
    content: (basket, beers, addToBasket, next, current, handlemodal, handlemodal2) => <Step4 basket={basket} beers={beers} addToBasket={addToBasket} next={next} current={current}  handlemodal2={handlemodal2} />,
  },
  {
    step: 5,
    title: "Enjoy and repeat!",
    current: 4,
    content: ( basket, beers, addToBasket, next, current, handlemodal, handlemodal2)  => <Step5 basket={basket} beers={beers} addToBasket={addToBasket} next={next} current={current}  handlemodal2={handlemodal2} />,
  },
];  



function Orderflow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [beers, setBeers] = useState([]);
  

  // const [start, setStart] = useState(0);

  useEffect(() => {
    fetch(`https://beerb-exam.herokuapp.com/beertypes`)
      .then((res) => res.json())
      .then(setBeers);
  },[]);

  const [basket, setBasket] = useState([]);
  function addToBasket(payload, amount=1) {
    console.log(payload);
    const inBasket = basket.findIndex((item) => item.name === payload.name);
    if (inBasket === -1) {
      const nextPayload = { ...payload };
      nextPayload.amount = amount ;
      setBasket((prevState) => [...prevState, nextPayload]);
    } else {
      const newBasket = basket.map((item) => {
        if (item.name === payload.name) {
          item.amount = amount;
        }
        return item;
      });
      setBasket(newBasket);
    };
  } 


  function next() {
      console.log("next clicked");
      const nextStep = current + 1;
      setCurrent(nextStep);
  }

  const handlemodal2 = () => {
    setVisible2(!visible2);
  };

  const handlemodal = () => {
    setVisible(!visible);
  };

  return (
    // don't forget to add hidden class to orderflow
    <div className="orderflow">
      <Header />
        {visible2 === true && <Beermodal handlemodal2={handlemodal2} visible2={visible2} />}
      {visible === true && <Paymentform handlemodal={handlemodal} visible={visible} next={next} />}
      <Steps current={current}>
        {steps.map((item) => (
          <Step  key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content-container">
        {steps.map((item) => (
          <div key={item.title} className={`steps-content ${item.step !== current + 1}`}>
            {" "}
            {item.content(basket,beers, addToBasket, next, current, handlemodal, handlemodal2)}{" "}
          </div>
        ))}
      </div>

      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
        {/* {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )} */}
      </div>
    </div>
  );
}

export {Orderflow} ;

import React from "react";
import { Steps, Button, message } from "antd";
import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Header.js";

import { Step1, Step2, Step3, Step4, Step5 } from "./Steps.js";
import { Paymentform } from "./Paymentform.js";
import { Orderpickupmodal } from "./Orderpickupmodal";
import { Beermodal } from "./Beermodal.js";
import { useState, useEffect, useRef } from "react";

const { Step } = Steps;
  



function Orderflow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const myEl = useRef(null);
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  // const [start, setStart] = useState(0);

  useEffect(() => {
    fetch(`https://beerb-exam.herokuapp.com/beertypes`)
      .then((res) => res.json())
      .then(setProducts);
  });

  function addToBasket(payload) {
    const inBasket = basket.findIndex((item) => item.name === payload.name);
    if (inBasket === -1) {
      const nextPayload = { ...payload };
      nextPayload.amount = 1 ;
      setBasket((prevState) => [...prevState, nextPayload]);
    } else {
      const newBasket = basket.map((item) => {
        if (item.name === payload.name) {
          item.amount += 1;
        }
        return item;
      });
      setBasket(newBasket);
    };
  } 


  function next() {
    console.log("next clicked");
    const nextStep = current + 1;
    if (current === 0) {
      setCurrent(nextStep);
    } else if (current === 1) {
      setCurrent(nextStep);
      document.getElementsByClassName("App")[0].classList.add("page-slide-to-left");
    } else if (current === 2) {
      setCurrent(nextStep);
      Orderpickupmodal();
    } else if (current === 4) {
    } else {
      setCurrent(nextStep);
    }
  }

  // function prev() {
  //   const prevStep = current - 1;
  //   setCurrent(prevStep);
  // }

  const handlemodal = () => {
    setVisible(!visible);
  };

  return (
    // don't forget to add hidden class to orderflow
    <div className="orderflow">
      <Header />
      {visible === true && <Paymentform addToBasket={addToBasket} handlemodal={handlemodal} visible={visible} next={next} />}
      {visible === true && <Beermodal handlemodal2={handlemodal} visible={visible} />}
      <Steps current={current}>
        {steps.map((item) => (
          <Step  key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content-container">
        {steps.map((item) => (
          <div key={item.title} className={`steps-content ${item.step !== current + 1}`}>
            {" "}
            {item.content(products, addToBasket, next, current, handlemodal)}{" "}
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

const steps = [
  {
    // step: 1,
    title: "Select your beer",

    current: 0,
    content: (products, addToBasket, next, current, handlemodal) => <Step1 beers={products} addToBasket={addToBasket} next={next} current={current} handlemodal={handlemodal} />,

  },
  {
    // step: 2,
    title: "Place your order",
    current: 1,
    content: (next, current, handlemodal) => <Step2 next={next} current={current} handlemodal={handlemodal} />,
  },
  {
    // step: 3,
    title: "A bit of a patience",
    current: 2,
    content: (next, current) => <Step3 next={next} current={current} />,
  },
  {
    // step: 4,
    title: "Pick up your order ",
    current: 3,
    content: (next, current) => <Step4 next={next} current={current} />,
  },
  {
    // step: 5,
    title: "Enjoy and repeat!",
    current: 4,
    content: (next, current) => <Step5 next={next} current={current} />,
  },
];
export {Orderflow} ;

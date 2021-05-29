import React from "react";
import { Steps, Button, message } from "antd";
import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Header.js";
import { Step1 } from "./Steps.js";
import { Step2 } from "./Steps.js";
import { Step3 } from "./Steps.js";
import { Step4 } from "./Steps.js";
import { Step5 } from "./Steps.js";
import { useState, useEffect, useRef } from "react";

const { Step } = Steps;


function Orderflow() {
  const [current, setCurrent] = React.useState(0);
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
    const inBasket = basket.findIndex((item) => item.id === payload.id);
    if (inBasket === -1) {
      const nextPayload = { ...payload };
      nextPayload.amount = 1;
      setBasket((prevState) => [...prevState, nextPayload]);
    } else {
      const newBasket = basket.map((item) => {
        if (item.id === payload.id) {
          item.amount += 1;
        }
        return item;
      });
      setBasket(newBasket);
    }
  }

  function next() {
    console.log("next clicked");
    const nextStep = current + 1;
    setCurrent(nextStep);
    if (current === 1) {
      document.getElementsByClassName("App")[0].classList.add("page-slide-to-left");
    }
  }

  function prev() {
    const prevStep = current - 1;
    setCurrent(prevStep);
  }
  
const steps = [
  {
    step: 1,
    title: "Select your beer",
    content: (next) => <Step1 beers={products} basket={basket} addToBasket={addToBasket} next={next} />,
  },
  {
    step: 2,
    title: "Place your order",
    content: (next) => <Step2 basket={basket} next={next} />,
  },
  {
    step: 3,
    title: "A bit of a patience",
    content: (next) => <Step3 next={next} />,
  },
  {
    step: 4,
    title: "Pick up your order ",
    content: (next) => <Step4 next={next} />,
  },
  {
    step: 5,
    title: "Enjoy and repeat",
    content: (next) => <Step5 next={next} />,
  },
];

  return (
    <>
      <Header />
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content-container">
        {steps.map((item) => (
          <div className={`steps-content ${item.step !== current + 1}`}>{item.content(next)}</div>
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
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
}

export { Orderflow };

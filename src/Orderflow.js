import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Header.js";
import { Step1 } from "./Steps.js";
import { Step2 } from "./Steps.js";
import { Step3 } from "./Steps.js";
import { Step4 } from "./Steps.js";
import { Step5 } from "./Steps.js";

const { Step } = Steps;

const steps = [
  {
    step: 1,
    title: "Select your beer",
    current: 0,
    content: (next, current) => <Step1 next={next} current={current} />,
  },
  {
    step: 2,
    title: "Place your order",
    current: 1,
    content: (next, current) => <Step2 next={next} current={current} />,
  },
  {
    step: 3,
    title: "A bit of a patience",
    current: 2,
    content: (next, current) => <Step3 next={next} current={current} />,
  },
  {
    step: 4,
    title: "Pick up your order ",
    current: 3,
    content: (next, current) => <Step4 next={next} current={current} />,
  },
  {
    step: 5,
    title: "Enjoy and repeat",
    current: 4,
    content: (next, current) => <Step5 next={next} current={current} />,
  },
];

function Orderflow() {
  const [current, setCurrent] = useState(0);

  function next() {
    console.log("next clicked");
    const nextStep = current + 1;
    setCurrent(nextStep);
    if (current === 0) {
      setCurrent(nextStep);
    }
    if (current === 1) {
      setCurrent(nextStep);
      document.getElementsByClassName("App")[0].classList.add("page-slide-to-left");
    }
  }

  function prev() {
    const prevStep = current - 1;
    setCurrent(prevStep);
  }

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

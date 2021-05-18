import React from "react";
import ReactDOM from "react-dom";
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
    content: <Step1 />,
  },
  {
    step: 2,
    title: "Place your order",
    content: <Step2 />,
  },
  {
    step: 3,
    title: "A bit of a patience",
    content: <Step3 />,
  },
  {
    step: 4,
    title: "Pick up your order ",
    content: <Step4 />,
  },
  {
    step: 5,
    title: "Enjoy and repeat",
    content: <Step5 />,
  },
];

function Orderflow() {
  const [current, setCurrent] = React.useState(0);

  function next() {
    const nextStep = current + 1;
    setCurrent(nextStep);
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
      <div class="steps-content-container">
        {steps.map((item) => (
          <div className={`steps-content ${item.step !== current + 1}`}>{item.content}</div>
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

//creating parent container and adding it to DOM
// let stepsContentContainer = React.createElement("div", { className: "steps-content-container" });
// document.getElementsByClassName(".App")[0].appendChild(stepsContentContainer);

export { Orderflow };

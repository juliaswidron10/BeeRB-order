import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Button } from "antd";

function Step1(props) {
  // if()
  return (
    <div className="step-container-1">
      <h1>Beers</h1>
      <Button className="button btn-black" type="primary" onClick={props.next}>
        Add to cart
      </Button>
    </div>
  );
}

function Step2(props) {
  // if()
  console.log(props.current);
  return (
    <div className="step-container-2">
      <h1>Your order</h1>
      {props.current === 1 && (
        <Button className="button btn-black" type="primary" onClick={props.next}>
          Pay now
        </Button>
      )}
    </div>
  );
}

export class Step3 extends React.Component {
  render() {
    // if()
    return (
      <div>
        <h1>hollalal</h1>
      </div>
    );
  }
}
export class Step4 extends React.Component {
  render() {
    // if()
    return (
      <div>
        <h1>hollalal</h1>
      </div>
    );
  }
}
export class Step5 extends React.Component {
  render() {
    // if()
    return (
      <div>
        <h1>hollalal</h1>
      </div>
    );
  }
}

export { Step1 };
export { Step2 };

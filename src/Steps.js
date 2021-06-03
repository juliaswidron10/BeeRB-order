import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Store } from "./store/store";
import { Orderpickupmodal } from "./Orderpickupmodal";
import Basket from "./store/basket";

function refreshPage() {
  window.location.reload(false);
}

// function step1next() {
//   next();
// }

function Step1(props) {
  return (
    <div className="step-container step-container-1">
      {/* add if statement about cart.length, if there is at least one product in the cart, add to cart */}
      <Store
        beerPrices={props.beerPrices}
        total={props.total}
        beers={props.beers}
        basket={props.basket}
        addToBasket={props.addToBasket}
      />
    </div>
  );
}

function Step2(props) {
  console.log(props.current);
  return (
    <div className="step-container step-container-2">
      {/* conditional renderring */}
      {props.current === 0 && (
        <p className="placeholder-basket">Aren't you finding your best beer match? Ask our staff for recommendation!</p>
      )}
      {props.current > 0 && (
        <div>
          <Basket
            beerPrices={props.beerPrices}
            total={props.total}
            beers={props.beers}
            basket={props.basket}
            addToBasket={props.addToBasket}
          />
          <Button className="button btn-yellow" type="primary" onClick={() => props.handlemodal()}>
            Place order
          </Button>
        </div>
      )}
    </div>
  );
}

function Step3(props) {
  // console.log('we are at the step 3')
  if (props.current === 2) {
    setTimeout(() => {
      props.next();
      Orderpickupmodal();
    }, 3000);
  }
  return (
    <div className="step-container step-container-3">
      {/* to do: add bartender name instead of jonas */}
      <p>Give us some time to finish your order.</p>
      <p>
        <strong>We’ll notify you once it’s ready for pickup!</strong>
      </p>
      {/* <p className="queue-number-text">You are number 4 in the queue</p> */}
    </div>
  );
}

function Step4(props) {
  if (props.current === 3) {
    setTimeout(() => {
      props.next();
    }, 1000);
  }
  return (
    <div className="step-container step-container-4">
      {props.current > 2 && (
        <div>
          <p>
            You can now pickup your order at the bar! <br></br>Just show your order ID.
          </p>{" "}
          <p className="queue-number-text">Order id: #</p>
        </div>
      )}
    </div>
  );
}

function Step5(props) {
  return (
    <div className="step-container step-container-4">
      {props.current > 3 && (
        <Button className="button btn-yellow" type="primary" onClick={refreshPage}>
          Order again
        </Button>
      )}
    </div>
  );
}

export { Step1, Step2, Step3, Step4, Step5 };

import React from "react";
import "./App.scss";

export class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <header className="homepage-header">
          <h1>Welcome to Foobar</h1>
          <p>We want you to enjoy your time to the fullest, hence we made the order process easy for you:</p>
        </header>

        <div className="steps-list">
          <div className="step-text">
            <h2>1</h2>
            <div>
              <h3>Check the beer selection</h3>
              <p>
                We have quite some treats for you to taste! If you’re in doubt, read the specifications, aromas etc.
                before you make your decision. Remember: “There is no such thing as 1 beer!”
              </p>
            </div>
          </div>

          <div className="step-text">
            <h2>2</h2>
            <div>
              <h3>Place your order</h3>
              <p>Add the desired drinks to your cart and send it to us - One order per table por favor!</p>
            </div>
          </div>

          <div className="step-text">
            <h2>3</h2>
            <div>
              <h3>A bit of a patience!</h3>
              <p>
                You'll have to wait a bit until one of our skilled bartenders will be able to prepare your order. We'll
                let you know when it's ready.
              </p>
            </div>
          </div>

          <div className="step-text">
            <h2>4</h2>
            <div>
              <h3>Pick up your order up at the bar</h3>
              <p>
                You are one step closer to your drink, but you have to work for it a bit. You can get your order at the
                counter.
              </p>
            </div>
          </div>

          <div className="step5-text">
            <h2>+1</h2>
            <div>
              <h3>Enjoy &amp; Repeat</h3>
              <p>Because you have to taste them all!</p>
            </div>
          </div>
        </div>

        <button className="btn-orange" onClick={() => this.showBeerlist()}>
          Get started
        </button>
      </div>
    );
  }
}

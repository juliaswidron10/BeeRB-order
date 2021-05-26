import React from "react";
import { Modal, Button } from "antd";
import "./App.scss";
import "antd/dist/antd.css";

function Orderpickupmodal() {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: "Your order is ready!",
    content: (
      <div className="orderpickup-modal">
        <p>
          You can now pickup your order at the bar! <br></br>Just tell Jonas your order ID.
        </p>
        <p className="queue-number-text"> Order id: # </p>
        <div className="cheers-svg-container">
          <div className="cheers-icon"></div>
        </div>
      </div>
    ),
  });

  //   const timer = setInterval(() => {
  //     secondsToGo -= 1;
  //   }, 1000);
  //   setTimeout(() => {
  //     clearInterval(timer);
  //     modal.destroy();
  //   }, secondsToGo * 1000);
}

export { Orderpickupmodal };
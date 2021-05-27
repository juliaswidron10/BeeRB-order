import React from "react";
import { Modal } from "antd";
import "./App.scss";
import "antd/dist/antd.css";

function Beermodal(props) {
  return (
    <div className="beer-modal">
      <Modal visible={props.visible2} onCancel={props.handlemodal2}>
        <div className="beer-modal">
          <p>
            You can now pickup your order at the bar! <br></br>Just tell Jonas your order ID.
          </p>
          <p className="queue-number-text"> Order id: # </p>
          <div className="cheers-svg-container">
            <div className="cheers-icon"></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export { Beermodal };

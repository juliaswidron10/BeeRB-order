import React from "react";
import "./App.scss";
import "antd/dist/antd.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="headers-container">
        <Header1 />
        <Header2 />
      </div>
    );
  }
}

export class Header1 extends React.Component {
  showHomepage() {
    // only works when both homepage and orderflow are in app.js
    console.log("showhomepage");
    document.getElementsByClassName("homepage")[0].classList.remove("hidden");
    document.getElementsByClassName("orderflow")[0].classList.add("hidden");
  }
  render() {
    return (
      <div className="homepage-header">
        <div className="info-icon-container">
          <div className="info-icon" onClick={this.showHomepage.bind(this)}></div>
        </div>
        <h1>Beer selection</h1>
        <p>Take your time to go through the selection, we are sure you’ll find something tasty!</p>
      </div>
    );
  }
}

export class Header2 extends React.Component {
  render() {
    return (
      <div className="homepage-header">
        <h1>Your order</h1>
        <p>Here is everything you need to know about your order:</p>
      </div>
    );
  }
}

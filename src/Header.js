import React from "react";
import "./App.scss";
import "antd/dist/antd.css";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Beer selection</h1>
        <p>Take your time to go through the selection, we are sure you’ll find something tasty!</p>
      </div>
    );
  }
}

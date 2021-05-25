//import logo from "./logo.svg";
import "./App.scss";
import "antd/dist/antd.css";

import { Homepage } from "./Homepage.js";
// import { Paymentform } from "./Paymentform.js";
import { Orderflow } from "./Orderflow.js";

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Paymentform /> */}
      <Orderflow />
    </div>
  );
}

export default App;

//import logo from "./logo.svg";
import "./App.scss";
import "antd/dist/antd.css";

// import { Homepage } from "./Homepage.js";
// import { Paymentform } from "./Paymentform.js";
import { Orderflow } from "./Orderflow.js";
// import { Orderpickupmodal } from "./Orderpickupmodal.js";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <Paymentform /> */}
      <Orderflow />
      {/* <Orderpickupmodal /> */}
    </div>
  );
}

export default App;

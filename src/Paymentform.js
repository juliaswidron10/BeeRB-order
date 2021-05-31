import { useState, useEffect, useRef } from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Input, Button, Modal } from "antd";
import MaskedInput from "antd-mask-input";


// post order here:
// https://beerb-exam.herokuapp.com/order

// function closePaymentModal() {
//   console.log("closepay");
//   document.getElementsByClassName("payment-modal")[0].classList.add("hidden");
//   // props.next();
// }

function Paymentform(props) {
  // const [form] = Form.useForm(); //not sure if i need this "form" thingy
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  const [name, setName] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [expirydate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [isValid, setIsValid] = useState(false);

  const form = useRef(null);

  useEffect(() => {
    const isCardNumberValid = cardnumber.replaceAll(" ", "").length === 16;
    const isExpiryDateValid = expirydate.replace("/", "").length === 4;
    const isCvvValid = cvv.replace("/", "").length === 3;
    setIsValid(form.current.checkValidity() && isCardNumberValid && isExpiryDateValid && isCvvValid);
  }, [name, cardnumber, expirydate, cvv]);

  // const handleOk = (schoolRollOutRequestForm) => {
  //   //  post order to database
  //   _postSchoolRollOutRequest(schoolRollOutRequestForm);
  //   setVisible(false);
  // };

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handlemodal();
    props.next();

    // setInterval(() => {
    //   props.next();
    // }, 3000);
  }

  return (
    <div>
      <Modal
        destroyOnClose
        title="Payment"
        visible={props.visible}
        onCancel={props.handlemodal}
        className="payment-modal"
      >
        {/* <div className="payment-header">
          <h1>Payment</h1>
          <p>Please enter your card information here</p>
        </div> */}
        <div className="payment-modal-header">
          <h1>Payment</h1>
          <p>Please enter your card information here.</p>
        </div>
        <form ref={form}>
          <div className="form-layout div1">
            <label htmlFor="name">Cardholder's name</label>
            <Input
              id="name"
              type="text"
              required
              minLength="2"
              maxLength="26"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-layout div2">
            <label htmlFor="cardnumber">Card number</label>
            <MaskedInput
              mask="1111 1111 1111 1111"
              value={cardnumber}
              className="ant-input"
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-layout div3">
            <label htmlFor="expirydate">Expiry date (MM/YY)</label>
            <MaskedInput
              mask="11/11"
              className="ant-input"
              required
              value={expirydate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="form-layout div4">
            <label htmlFor="cvv">CVV</label>
            <MaskedInput
              mask="111"
              value={cvv}
              className="ant-input"
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>

          <Button className="div5" type="primary" htmlType="submit" disabled={!isValid} onClick={handleSubmit}>
            Complete payment
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export { Paymentform };

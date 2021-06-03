import { useState, useEffect, useRef } from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Input, Button, Modal, Result } from "antd";
import MaskedInput from "antd-mask-input";
import ReactCardFlip from "react-card-flip";
import { SmileOutlined } from "@ant-design/icons";

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
  const [submitted, setSubmitted] = useState(false);

  const form = useRef(null);

  useEffect(() => {
    const onlynumbers = /^[0-9]+$/;
    const isCardNumberValid =
      cardnumber.replaceAll(" ", "").length === 16 && cardnumber.replaceAll(" ", "").match(onlynumbers);
    const isExpiryDateValid =
      expirydate.replace("/", "").length === 4 && expirydate.replace("/", "").match(onlynumbers);
    const isCvvValid = cvv.length === 3 && cvv.match(onlynumbers);
    setIsValid(form.current.checkValidity() && isCardNumberValid && isExpiryDateValid && isCvvValid);
  }, [name, cardnumber, expirydate, cvv]);

  // const handleOk = (schoolRollOutRequestForm) => {
  //   //  post order to database
  //   _postSchoolRollOutRequest(schoolRollOutRequestForm);
  //   setVisible(false);
  // };

  function handleSubmit(evt) {
    evt.preventDefault();
    setSubmitted(true);
    // props.handlemodal();
    // props.next();

    // setInterval(() => {
    //   props.next();
    // }, 3000);
  }

  function handleClose(evt) {
    evt.preventDefault();
    props.handlemodal();
    step2next();
  }

  function step2next() {
    props.next();
    document.getElementsByClassName("App")[0].classList.add("page-slide-to-left");
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
        <ReactCardFlip isFlipped={submitted}>
          {/* <div className="payment-header">
          <h1>Payment</h1>
          <p>Please enter your card information here</p>
        </div> */}

          <form ref={form}>
            <div className="payment-modal-header">
              <h1>Payment</h1>
              <p>Please enter your card information here.</p>
            </div>
            <div className="payment-grid">
              <div className="form-layout div1">
                <label htmlFor="cardnumber">Card number</label>
                <MaskedInput
                  mask="1111 1111 1111 1111"
                  value={cardnumber}
                  className="ant-input"
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>

              <div className="form-layout div2">
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
            </div>
            <Button
              className="completePaymentbutton"
              type="primary"
              htmlType="submit"
              disabled={!isValid}
              onClick={handleSubmit}
            >
              Complete payment
            </Button>
          </form>
          <Result
            title="Thank you!"
            subTitle="PAYMENT COMPLETED SUCCESSFULLY"
            icon={<SmileOutlined />}
            extra={[
              <div key="header" className="payment-modal-thankyou-extra">
                <p>We'll notify you when the order is ready for pickup.</p>
              </div>,
              <Button className="btn-black" type="primary" key="console" onClick={handleClose}>
                Back to page
              </Button>,
            ]}
          />
        </ReactCardFlip>
      </Modal>
    </div>
  );
}

export { Paymentform };

import React from 'react';
import "./App.scss";
import { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import MaskedInput from 'antd-mask-input';
 
export default function Paymentform() {
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
    setIsValid(
      form.current.checkValidity() && isCardNumberValid &&  isExpiryDateValid && isCvvValid
    );
  }, [name, cardnumber, expirydate, cvv]);

 
  return (
    <div className="Paymentform">
        <form ref={form}>
          
          <div className="form-layout">
            <label htmlFor="name">Name on card</label>
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

        <div className="form-layout">
            <label htmlFor="cardnumber">Card number</label>
            <MaskedInput
              mask="1111 1111 1111 1111"
              value={cardnumber}
              className="ant-input"
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-layout">
            <label htmlFor="expirydate">Expiration date (MM/YY)</label>
            <MaskedInput
              mask="11/11"
              className="ant-input"
              required
              value={expirydate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            
          </div>
          <div className="form-layout">
            <label htmlFor="cvv">CVV</label>
            <MaskedInput
              mask="111"
              value={cvv}
              className="ant-input"
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>

          <Button type="primary" htmlType="submit" disabled={!isValid}>
              Complete payment
          </Button>
        </form>
 
    </div>
  );
}
 
export { Paymentform };


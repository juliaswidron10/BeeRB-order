import React from "react";
import "./App.scss";

import { useState, useEffect, useRef } from "react";
import { Button, Input } from "antd";
import InputMask from "react-input-mask";
import Cleave from "cleave.js/react";
//import ReactCardFlip from "react-card-flip";

import "antd/dist/antd.css";

export default function Paymentform() {
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cardnumber2, setCardnumber2] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [isValid, setIsValid] = useState(false);
  //const [submitted, setSubmitted] = useState(false);

  const form = useRef(null);

  useEffect(() => {
    const isCreditCardValid = cardnumber.replaceAll(" ", "").length === 16;
    const isMonthYearValid = monthYear.replace("/", "").length === 4;
    setIsValid(
      form.current.checkValidity() && isMonthYearValid && isCreditCardValid
    );
  }, [name, cardnumber, monthYear, cardnumber2]);

/*   function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  } */

  return (
    <div className="Paymentform">
        <form ref={form}>
          
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              required
              minLength="2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="cc2">Credit Card 2</label>
            <Cleave
              id="cc2"
              className="ant-input"
              options={{
                blocks: [4, 4, 4, 4],
                delimiter: " ",
                numericOnly: true
              }}
              onChange={(e) => setCardnumber2(e.target.rawValue)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="cardnumber">Card number</label>
            <InputMask
              mask="9999 9999 9999 9999"
              value={cardnumber}
              maskChar=""
              className="ant-input"
              onChange={(e) => setCardnumber(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="monthyear">Month/Year</label>
            <Input
              mask="99/99"
              maskChar=""
              className="ant-input"
              required
              value={monthYear}
              onChange={(e) => setMonthYear(e.target.value)}
              minLength="17"
            ></Input>
          </div>
          <Button type="primary" htmlType="submit" disabled={!isValid}>
            Submit
          </Button>
        </form>

    </div>
  );
}

export { Paymentform };

/* import React from "react";
import "./App.scss";
import 'antd/dist/antd.css';
import { Form, Input, Button, Space } from 'antd';


  const Paymentform = () => {
    const [form] = Form.useForm(); //not sure if i need this "form" thingy
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };

  return (
    <Form form={form} layout="vertical" name="complex-form" onFinish={onFinish} labelCol={{ span: 100 }} wrapperCol={{ span: 16 }}>

      <Form.Item label="Card number">
        <Space>
          <Form.Item
            name="cardnumber"
            noStyle
            rules={[{ required: true, message: 'Enter a valid card number' }]}
          >
            <Input type="text" style={{ width: 300 }} minLength="16" maxLength="16" pattern="[0-9]{16}" placeholder="Card number" />
          </Form.Item>
        </Space>
      </Form.Item>

      <Form.Item label="Name on card">
        <Space>
          <Form.Item
            name="nameoncard"
            noStyle
            rules={[{ required: true, message: 'Enter your name exactly as it is written in your card' }]}
          >
            <Input style={{ width: 300 }} minLength="2" maxLength="26" placeholder="Name on card" />
          </Form.Item>
        </Space>
      </Form.Item>

      <Form.Item label="Expiration date (MM/YY)" style={{ marginBottom: 0 }}>
        <Form.Item
          name="expirationdate"
          rules={[{ required: true, message: 'Enter a valid card expiration date' }]}
        >
         <Input style={{ width: 150 }} minLength="5" maxLength="5" placeholder="(MM/YY)" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="CVV">
        <Space>
          <Form.Item
            name="cvv"
            noStyle
            rules={[{ required: true, message: 'Enter the 3-digit security code on the back of your card' }]}
          >
            <Input style={{ width: 100 }} minLength="3" maxLength="3" placeholder="CVV" />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Complete payment
        </Button>
      </Form.Item>
    </Form>
  );
};

export { Paymentform };  */
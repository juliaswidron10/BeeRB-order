import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Form, Input, Button, Space, Modal } from "antd";

// post order here:
// https://beerb-exam.herokuapp.com/order

// function closePaymentModal() {
//   console.log("closepay");
//   document.getElementsByClassName("payment-modal")[0].classList.add("hidden");
//   // props.next();
// }

function Paymentform(props) {
  const [form] = Form.useForm(); //not sure if i need this "form" thingy
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
    <div className="modal payment-modal">
      <Modal destroyOnClose title="Payment" visible={props.visible} onCancel={props.handlemodal}>
        {/* <div className="payment-header">
          <h1>Payment</h1>
          <p>Please enter your card information here</p>
        </div> */}
        <Form
          form={form}
          layout="vertical"
          name="complex-form"
          onFinish={onFinish}
          labelCol={{ span: 100 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item label="Card number">
            <Space>
              <Form.Item
                type="number"
                name="cardnumber"
                noStyle
                rules={[{ required: true, minlength: "4", message: "Enter a valid card number" }]}
              >
                <Input style={{ width: 300 }} placeholder="Card number" />
              </Form.Item>
            </Space>
          </Form.Item>

          <Form.Item label="Name on card">
            <Space>
              <Form.Item
                name="nameoncard"
                noStyle
                rules={[{ required: true, message: "Enter your name exactly as it is written in your card" }]}
              >
                <Input style={{ width: 300 }} placeholder="Name on card" />
              </Form.Item>
            </Space>
          </Form.Item>

          <Form.Item label="Expiration date (MM/YY)" style={{ marginBottom: 0 }}>
            <Form.Item
              name="expirationdate"
              rules={[{ required: true, message: "Enter a valid card expiration date" }]}
            >
              <Input style={{ width: 150 }} placeholder="(MM/YY)" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="CVV">
            <Space>
              <Form.Item
                name="cvv"
                noStyle
                rules={[{ required: true, message: "Enter the 3-digit security code on the back of your card" }]}
              >
                <Input style={{ width: 100 }} placeholder="CVV" />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button className="btn-orange" type="primary" htmlType="submit" onClick={handleSubmit}>
              Complete payment
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export { Paymentform };

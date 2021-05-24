import React from "react";
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
            <Input style={{ width: 300 }} placeholder="Card number" />
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
            <Input style={{ width: 300 }} placeholder="Name on card" />
          </Form.Item>
        </Space>
      </Form.Item>

      <Form.Item label="Expiration date (MM/YY)" style={{ marginBottom: 0 }}>
        <Form.Item
          name="expirationdate"
          rules={[{ required: true, message: 'Enter a valid card expiration date' }]}
        >
         <Input style={{ width: 150 }} placeholder="(MM/YY)" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="CVV">
        <Space>
          <Form.Item
            name="cvv"
            noStyle
            rules={[{ required: true, message: 'Enter the 3-digit security code on the back of your card' }]}
          >
            <Input style={{ width: 100 }} placeholder="CVV" />
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

export { Paymentform }; 
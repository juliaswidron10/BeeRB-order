import React from "react";
import { Card } from "antd";
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal } from "antd";
import { Tabs } from "antd";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { Meta } = Card;

export default function Beer(props) {
  const [amount, setAmount] = useState(0);
  function handleminus(evt) {
    if (amount > 0) {
      setAmount((prevState) => {
        return prevState - 1;
      });
    }
  }

  function handleplus(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }

  // Modal code from entd
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="beer-inventory">
      <Card
        hoverable
        style={{ width: 150 }}
        cover={<img onClick={showModal} alt="example" src={process.env.PUBLIC_URL + `/beers/${props.label}`} />}
      >
        <Meta title={props.name} description={props.category} />
        <p className="store-item-price">75 DKK</p>

        <div className="beer-add">
          <MinusCircleOutlined onClick={handleminus} />
          <h1>{amount}</h1>
          <PlusCircleOutlined onClick={handleplus} />
        </div>

        <Button
          onClick={() => props.addToBasket(props, amount)}
          className="button btn-black beer-button"
          type="primary"
        >
          Add to cart
        </Button>
      </Card>

      {/* Modal to display details about the beer */}
      <Modal
        className="beersdetailsmodal"
        title="Beerdetails"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <aside>
          <img src={process.env.PUBLIC_URL + `/beers/${props.label}`} alt="beer label" />
        </aside>
        <div>
          <div className="beer-details-heading">
            <h1>{props.name}</h1>
            <div>
              <h2>{props.category}</h2>
              <h2>{props.alc}% alc</h2>
            </div>
          </div>

          <div className="addingtobasket">
            <MinusCircleOutlined className="butt-add" onClick={handleminus} />
            <h1>{amount}</h1>
            <PlusCircleOutlined className="butt-add" onClick={handleplus} />
            <Button
              onClick={() => props.addToBasket(props, amount)}
              className="button btn-black beer-button"
              type="primary"
            >
              Add to cart
            </Button>
          </div>

          <div className="beerInfo">
            <h1>Overall Impression</h1>
            <p>{props.description.overallImpression}</p>
            {/* Code from antd to use tabs to display beer information */}
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Aroma" key="1">
                {props.description.aroma}
              </TabPane>
              <TabPane tab="Appearance" key="2">
                {props.description.appearance}
              </TabPane>
              <TabPane tab="Flavor" key="3">
                {props.description.flavor}
              </TabPane>
              <TabPane tab="Mouthfeel" key="4">
                {props.description.mouthfeel}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Modal>
    </div>
  );
}

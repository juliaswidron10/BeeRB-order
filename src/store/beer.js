import React from 'react';
import elhefe from '../beers/elhefe.png';
import { Card } from 'antd';
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Modal } from "antd";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
// import { BeerDetails } from './beerdetails'
const { Meta } = Card;


export default function Beer(props) {

  const [amount, setAmount] = useState(0);

  function handleminus(evt) {
    if(amount > 0){
      setAmount((prevState) => {
        return prevState - 1;
      });
    }
  };

  function handleplus(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [displaydetails, setDetails] = useState(aroma)

  // let displaydetails = 'props.description.aroma'

  // function changedescription(button){
  //   if(displaydetails !== button){
  //     displaydetails = `props.description.${button}`;
  //   }
  // }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
        return(
            <div className="beer-inventory">
              {/* <BeerDetails handleminus={handleminus} handleplus={handleplus} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} /> */}
                <Card 
                hoverable
                style={{ width: 200 }}
                 cover={<img onClick={showModal} alt="example" src={elhefe} />} >
                <Meta title={props.name} description={props.category} />
                <div className="beer-add">
                
                <MinusCircleOutlined  onClick={handleminus} />
                <h1>{ amount }</h1>
                <PlusCircleOutlined onClick={handleplus}/>
                </div>
                <Button onClick={() => props.addToBasket(props)}  className="button btn-black beer-button" type="primary">
                    Add
                </Button>
                </Card>
              
                <Modal className="beersdetailsmodal" title="Beerdetails" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <aside>
                   <img src={elhefe} />
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
                  <Button onClick={() => props.addToBasket(props)}  className="button btn-black beer-button" type="primary">
                   Add
                  </Button>
                  <MinusCircleOutlined className="butt-add" onClick={handleminus} />
                  <h1>{amount}</h1>
                 <PlusCircleOutlined className="butt-add" onClick={handleplus}/>
                  </div>

                  <div className="beerInfo">
                    <h1>Overall Impression</h1>
                    <p>{props.description.overallImpression}</p>
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
                    {/* <ul>
                      <li onClick={}><h1>AROMA</h1></li>
                      <li onClick={changedescription('appearance')}><h1>APPEARANCE</h1></li>
                      <li onClick={changedescription('flavor')}><h1>FLAVOR</h1></li>
                      <li onClick={changedescription('mouthfeel')}><h1>MOUTHFEEL</h1></li>
                    </ul> */}
                    {/* <p>{state.displaydetails}</p> */}
                  </div>
                  </div>
                </Modal>
            </div>
        )
}

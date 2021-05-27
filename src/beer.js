import React from 'react';
import elhefe from './beers/elhefe.png';
import { Card } from 'antd';
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
const { Meta } = Card;


class Beer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         servingCustomer: '',
    //         status: '',
    //         statusdetail: '',
    //         usingaTab: false,
    //     }
    // }
    render(){
        return(
            <div className="beer-inventory">
                {/* <img src={elhefe} className="beerimg"/>
                <h1>El Hefe</h1> 
                <h2>IPA</h2>
                <p></p>
                <div className="buttons">
                    <p>+</p><h3>1</h3><p>-</p>
                </div>
                <button>Add to Cart</button> */}
                <Card
                hoverable
                style={{ width: 200 }}
                 cover={<img alt="example" src={elhefe} />} >
                <Meta title="El Hefe" description="IPA" />
                <div className="beer-add">
                <PlusCircleOutlined />
                <h1>1</h1>
                <MinusCircleOutlined />
                </div>
                <Button className="button btn-black beer-button" type="primary">
                    Add
                </Button>
                </Card>,

            </div>
        )
    }
}

export default Beer;
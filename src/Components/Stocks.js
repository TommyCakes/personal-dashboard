import React, { Component } from 'react';
import request from 'superagent';

export default class Stocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.getStockInformation();
    }

    getStockInformation = () => {
        const url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=GBP&to_currency=BTC&apikey=49CXC5TFVJAUFJ5W";
        request
            .get(url)
            .then(data => {
                const body = data.body['Realtime Currency Exchange Rate']
                console.log(body);
                this.setState({ data: body })
            })
            .catch(err => console.log(err))
    }

    render() {
         return (
             <div className="stocks">     
                <div className="container">
                <h1>Your Stocks</h1>           
                <div className="inner-container">
                    <div className="child child-thin">
                        <ul>
                            <li>{this.state.data['1. From_Currency Code']}</li>
                            <li>100 GBP</li>
                        </ul>
                    </div>

                    <div className="child child-thin">
                        <ul>
                            <li>{this.state.data['4. To_Currency Name']}</li>
                            <li>{this.state.data['8. Bid Price']}</li>
                        </ul>
                    </div>
                </div>  
                </div>                                                                                          
             </div>
         )
    }
}
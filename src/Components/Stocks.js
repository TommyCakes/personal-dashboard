import React, { Component } from 'react';
import request from 'superagent';

export default class Stocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getStockInformation() {
        request.get()    
    }

    render() {
         return (
             <div className="stocks">
                 <h1>Stocks</h1>

             </div>
         )
    }
}
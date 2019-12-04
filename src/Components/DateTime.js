import React, { Component } from 'react';
import ReactMoment from 'react-moment';
import Moment from 'moment';

export default class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Moment().format('h:mm:ss'),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: Moment().format('h:mm:ss a')
    });
  }

  render() {
      let { time, day, date } = this.state;
    return (
      <div>
        <h3 className="time">
          {time}
        </h3>
        
        <h4 className="date">
            <span><ReactMoment format="dddd"/></span>
        </h4>
        <h4 className="date">
            <ReactMoment format="MMMM do YYYY"/>
        </h4>      
      </div>
    );
  }
}

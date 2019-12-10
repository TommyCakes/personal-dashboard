import React, { Component } from 'react';
import gameImg from '../images/games.png';
import DateTime from './DateTime';
import Weather from './Weather';
import Music from './Music/Music';

const gamePlaceholder = {
    background: `url(${gameImg})`,
    backgroundSize: 'contain',
}

export default class Main extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            time: ""
        }      
    }    

    render() {
        return (
            <div className="main-container">
                {/* First row */}
                <div className="tall">
                    <Weather />
                </div>

                <div className="inner-container">          
                <div className="wide pink">
                    <Music />
                </div>
                <div className="child">
                    <DateTime />
                </div>  
                </div>      
                                    
                {/* Second Row */}        
                <div className="inner-container long-inner">
                <div className="child child-long">
                <p>Twitch Search</p>
                </div>            
                <div style={gamePlaceholder} className="wide wide-tv">
                
                </div>
                </div> 

            </div>
        )
    }
}
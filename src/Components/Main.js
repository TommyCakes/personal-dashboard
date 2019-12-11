import React, { Component } from 'react';
import gameImg from '../images/games.png';
import DateTime from './DateTime';
import Weather from './Weather';
import Music from './Music/Music';
import Twitch from './Twitch/Twitch';
import TwitchSearch from './Twitch/TwitchSearch';

const gamePlaceholder = {
    background: `url(${gameImg})`,
    backgroundSize: 'contain',
}

export default class Main extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            time: "",
            game: ""
        }      
    }    

    handleGameChange = (game) => {
        console.log(game);
        this.setState({
            game,
        });
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
                    <TwitchSearch onGameChange={this.handleGameChange}/>
                </div>            
                <div className="wide wide-tv">
                    <Twitch game={this.state.game}/>
                </div>
                </div> 

            </div>
        )
    }
}
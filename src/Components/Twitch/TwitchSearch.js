import React, { Component } from 'react';

export default class TwitchSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: "",
        }
    }
    
    onInputChange(game) {
        this.setState({game});
        this.props.onGameChange(game);
    }

    render() {
        return (
          <div className="twitch-searchbar">
            <h1> Now streaming</h1>
            <h2 className="game-searched">{ !this.state.game ? "Nothing..." : this.state.game }</h2>
            <div className="inputs">
                <input onChange={event => this.onInputChange(event.target.value)} className="form-control" id="game-input" type="text" placeholder="Pick a game"/>
            </div>            
            {/* <p className="error-message"></p>
            <i className="fa fa-gamepad fa-3x hidden" aria-hidden="true"></i>             */}
        </div>  
        );
    }
}

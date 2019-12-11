import React, { Component } from 'react';
import request from 'superagent';
import TwitchClient from 'twitch';

const clientId = 'r9feviwcj6v642he2nymobpfb6ayj1p';
const clientSecret = "xa7mkfz4q0xgz6c3g93scr7p9jxj9f";
const accessToken = 'xmyrcj1pa1o7wi87li8k5hfssh3xhl';
const client = TwitchClient.withClientCredentials(clientId, clientSecret);

export default class Twitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: '',   
            gameId: 0,
            videoId: 0,
        }             
    }
    
    componentDidUpdate(prevProps) {   
        if (this.props.game !== prevProps.game) {
            this.getGameId();
        }     
                
    }

    async getGameId() {  
        this.setState({
            game: this.props.game
        })              
        const game = await client.helix.games.getGameByName(this.state.game);

        if (game) {
            console.log(game);
            this.setState({ gameId: game.id });  
        } else {
            console.log('no game');
        } 
        this.getVideoId();              
    }

    async getVideoId() {       
        const video = await client.helix.videos.getVideosByGame(this.state.gameId);
        if (video) {
            console.log(video); 
            this.setState({ videoId: video.data[0].id })
        }        
    }
    
    render() {
        return (
            <div className="twitch-player"> 
                { !this.state.videoId ? "" :<iframe id="video" src={`https://player.twitch.tv/?video=${this.state.videoId}&autoplay=true`} frameBorder="0" scrolling="no" allowFullScreen={true}></iframe> }                                               
                                  
                
            </div>
        );
    }
}
import React from 'react';
import request from 'superagent';

export default class Twitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',   
        }     
    }

    componentWillMount() {
        this.getTwitchData()
    }

    getTwitchData = () =>  {
        var randomGame = "Dark Souls 3";
        const url = "https://api.twitch.tv/kraken/streams?game=" + randomGame;        
        request.get(url)
               .set('Client-ID', 'r9feviwcj6v642he2nymobpfb6ayj1p')
               .then((res) => {
               console.log(res.body); 
               this.setState({
                //    name: res.body.streams[0].channel.name
               })
        });
    }
    
    render() {
        return (
            <div className="twitch-player">                     
                <iframe id="video" src="https://player.twitch.tv/?channel=kwitty23&muted=true" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>                                                 
            </div>
        );
    }
}
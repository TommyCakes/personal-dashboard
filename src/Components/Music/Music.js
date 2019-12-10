import React from 'react';
import TrackInfo from './TrackInfo';
import request from 'superagent';

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      artist: '',
      name: '',
      user: ''
    };
    this.loadTrackInfo()
  }

  loadTrackInfo = () => {
    const url = "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=indiebros&api_key=12dbf5690b6f13b6e1930c52ba9ff2ab&limit=2&format=json";
    request(url) 
      .then(res => res.body.recenttracks)
      .then(data => this.setState({
          image: data['track'][0]['image'][2]['#text'],
          artist: data['track'][0].artist['#text'],
          name: data['track'][0]['name'],
          user: data['@attr'].user,                    
        }))
        .catch(error => console.error(error))
  }

  componentDidMount() {
    this.trackTimer = setInterval(
      () => this.loadTrackInfo(),
      1000 * 2
    );
  }

  componentWillUnmount() {
    clearInterval(this.trackTimer);
  }

  render() {
    return (
      <div>      
        <TrackInfo image={this.state.image} 
          artist={this.state.artist} 
          name={this.state.name} 
          user={this.state.user}
        />                    
      </div> 
    );
  }
}

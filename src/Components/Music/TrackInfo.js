import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TrackInfo extends React.Component {
    render() {        
        return (     
          <div className="track-info">  
              <div>
              <img 
                key={this.props.image} 
                src={this.props.image } 
                className="album-artwork" alt="" 
              />
              </div>
              <div className="artist-track-info">
                <p className="artist-name">
                  { this.props.artist}
                </p>
                <p className="artist-track">
                  { this.props.name }
                </p>                
                <p className="username">
                  {this.props.user}
                </p>
             </div>
           </div>  
        );
    }
}
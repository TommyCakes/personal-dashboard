import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faMusic } from '@fortawesome/free-solid-svg-icons';

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
             </div>

             <div className="username">
                  <FontAwesomeIcon icon={faUserAlt} size="xs"/>
                  <p>{this.props.user}</p>
                </div>
           </div>  
           
        );
    }
}
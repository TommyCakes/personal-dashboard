import React from 'react';
import './App.scss';
import gameImg from './images/games.png';

const gamePlaceholder = {
  background: `url(${gameImg})`,
  backgroundSize: 'contain',
}

function App() {
  return (
    <div className="App">
      <div className="main-container">
        {/* First row */}
        <div className="tall">
          <p>Weather</p>
        </div>

        <div className="inner-container">          
          <div className="wide pink">
          <p>Music</p>
          </div>
          <div className="child">
            <p>Date / Time</p>
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
    </div>
  );
}

export default App;

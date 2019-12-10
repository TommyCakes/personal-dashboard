import React from 'react';
import './styles/main.scss';
import Main from './Components/Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons';

library.add(fal, faCoffee);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;

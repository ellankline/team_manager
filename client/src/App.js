import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import AddPlayer from './views/AddPlayer';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/players/list"/>
        <AddPlayer path="/players/addplayer"/>
      </Router>
      
    </div>
  );
};

export default App;

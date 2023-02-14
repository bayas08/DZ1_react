import './App.css';

import React from 'react';

function Bayas(props) {
    return (
        <div>
            <h2>Hello {props.name}</h2>
        </div>
    );
}





function App() {
  return (
    <div className="App">
      <Bayas name='Bayas'/>
      <Bayas name='Bayas'/>
      <Bayas name='Bayas'/>
    </div>
  );
}

export default App;

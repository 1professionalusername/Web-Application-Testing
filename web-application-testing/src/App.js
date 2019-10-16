import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard.jsx';
import Display from './Display.jsx';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">

      <Dashboard balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes} />
      <Display balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes} />
    </div>
  );
}
export default App;
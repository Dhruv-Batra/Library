import './App.css';
import Searcher from './components/Searcher'
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Library</h3>
      </header>
      <div className="App-body">
        <Searcher/>
      </div>
    </div>
  );
}

export default App;

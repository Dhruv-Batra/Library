import './App.css';
import Searcher from './components/Searcher'
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Library from './components/Library'

function App() {

  document.title="Bookshelf";

  return (
    <div className="App">
      <Navbar/>
      <div className="App-body">
        <Switch> 
          <Route path='/bookshelf' component={Library}/>
          <Route path = '/' component={Searcher}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;

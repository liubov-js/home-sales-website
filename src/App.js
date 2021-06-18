import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homes from './components/Homes/Homes';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path="/" component={Homes} exact />
            </Switch>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;

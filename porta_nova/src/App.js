import React, {Component} from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/index';
import UnderConstruction from './pages/underConstruction';
import TeamPage from './pages/team';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {MainPage}/>
          <Route exact path = "/underConstruction" component = {UnderConstruction}/>
          <Route exact path = "/team" component = {TeamPage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;

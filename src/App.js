import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/indexHydro';
import TeamPage from './pages/team';
import EntryPage from './pages/entry';
import MainPageMec from './pages/indexMec';
import TeamPageMec from './pages/teamMec';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {EntryPage}/>  
          <Route exact path = "/indexHydro" component = {MainPage}/>
          <Route exact path = "/indexMec" component = {MainPageMec}/>
          <Route exact path = "/team" component = {TeamPage}/>
          <Route exact path = "/teamMec" component = {TeamPageMec}/>
        </Switch>
      </Router>
    )
  }
}

export default App;

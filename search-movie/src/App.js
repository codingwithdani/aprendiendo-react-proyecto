import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom'
import { thisExpression } from '@babel/types'
import {Home} from './pages/Home'
import {Detail} from './pages/Detail'
import { Notfound } from './pages/Notfound';

class App extends Component {


  render() {
    return ( 
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/character/:id' component={Detail} />
          <Route component={Notfound} />
        </Switch>
      </div>
    );
  }
}

export default App;

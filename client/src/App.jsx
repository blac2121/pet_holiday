import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;
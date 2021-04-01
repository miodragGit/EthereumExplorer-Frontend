import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Explorer from './pages/Explorer'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Explorer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

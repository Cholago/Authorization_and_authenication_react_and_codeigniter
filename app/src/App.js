import React from 'react';
import Login from './auth/login'
import Signup from './auth/signup'
import Home from './containers/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route render={() => <h1 className="text-center">Page not found</h1>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;

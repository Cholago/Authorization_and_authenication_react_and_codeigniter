import React from 'react';
import Login from './auth/login'
import Signup from './auth/signup'
import Main from './containers/main'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import isLoggedIn from './auth/isLoggedIn';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={isLoggedIn} />
          <Route path="/home" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route render={() => <h1 className="text-center">Page not found</h1>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
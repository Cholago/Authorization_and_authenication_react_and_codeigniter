import React from 'react';
import Login from './auth/login'
import Signup from './auth/signup'
import IsLoggedIn from './auth/isLoggedIn'
import Main from './containers/main'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/main" component={IsLoggedIn} />
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route render={() => <h1 className="text-center">Page not found</h1>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
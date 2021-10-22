import React from "react"
import { HomePage, Dashboard, SignupPage, AboutPage, ConnectPage} from './views'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.js';
import PrivateRoute from "./route/PrivateRoute.js";
import './index.css'


export default function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ HomePage }/>
            <Route path="/login" component={ SignupPage }/>
            <Route path="/about" component={ AboutPage }/>
            <PrivateRoute exact path="/dashboard" component={ Dashboard }/>
            <PrivateRoute exact path="/connect" component={ ConnectPage }/>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}



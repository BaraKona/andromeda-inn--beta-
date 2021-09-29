import React from "react"
import HomePage from './views/HomePage.js'
import Dashboard from './views/MainPage.js'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupPage from './views/SignupPage.js';
import { AuthProvider } from './contexts/AuthContext.js';
import PrivateRoute from "./route/PrivateRoute.js";


export default function App() {

  return (

    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={SignupPage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>

  );
}



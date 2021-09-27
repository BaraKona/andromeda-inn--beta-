import React from "react"
import HomePage from './Views/HomePage.js'
import Dashboard from './Views/MainPage.js'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupPage from './Views/SignupPage.js';
import { AuthProvider } from './Contexts/AuthContext.js';
import PrivateRoute from "./Route/PrivateRoute.js";


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



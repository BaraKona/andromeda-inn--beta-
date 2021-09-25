import React, { useState, useEffect } from "react"
import fire from './Api/firebase'
import HomePage from './Views/HomePage.js'
import Dashboard from './Views/MainPage.js'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupPage from './Views/SignupPage.js';
import { AuthProvider } from './Contexts/AuthContext.js';


export default function App() {

  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <AuthProvider>
          <Route path="/login" component={SignupPage} />
          <Route path="/Dashboard" component={Dashboard} />
          </AuthProvider>
        </Switch>
      </div>
    </Router>

  );
}



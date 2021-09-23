import React, { useState, useEffect } from "react"
import fire from './Api/firebase'
import HomePage from './Views/HomePage.js'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupPage from './Views/SignupPage.js';
import { AuthProvider } from './contexts/AuthContext.js';


export default function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
            <Route path="/signup">
              <SignupPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}



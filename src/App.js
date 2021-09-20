import HomePage from './Views/HomePage.js'
import './index.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupPage from './Views/SignupPage.js';

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



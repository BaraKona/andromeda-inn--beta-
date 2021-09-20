import HomePage from './Views/HomePage.js'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupPage from './Views/SignupPage.js';
import { AuthProvider } from './contexts/AuthContext.js';

export default function App() {

  return (
  <AuthProvider>
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
  </AuthProvider>
  );
}



import React, {useEffect} from "react"
import { HomePage, SignupPage, AboutPage, ConnectPage} from './views'
import ProfilePage from './components/dashboard/profilePage'
import CreatePostPage from './components/dashboard/createPost'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.js';
import {useDispatch} from 'react-redux';
import {getPosts, getLimit} from './actions/posts'
import PrivateRoute from "./route/PrivateRoute.js";
import './index.css'


export default function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getLimit());
  }, [])

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ HomePage }/>
            <Route path="/login" component={ SignupPage }/>
            <Route path="/about" component={ AboutPage }/>
            <PrivateRoute exact path="/dashboard/profile" component={ProfilePage}/>
            <PrivateRoute exact path="/dashboard/create-post" component={CreatePostPage}/>
            <PrivateRoute exact path="/connect" component={ ConnectPage }/>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}



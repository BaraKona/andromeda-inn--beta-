import React, {useEffect} from "react"
import { HomePage, AboutPage, LoginPage, SignupPage, ForgotPasswordPage} from './views'
import ProfilePage from './components/dashboard/profilePage'
import Discover from './components/dashboard/discover'
import CreatePostPage from './components/dashboard/createPost'
import Dashboard from './components/dashboard/dashboard'
import Chat from './components/dashboard/chat'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import PrivateRoute from "./route/PrivateRoute.js";
import './index.css'


export default function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/forgot-password" component={ForgotPasswordPage} />
            <Route exact path="/" component={ HomePage }/>
            <Route path="/about" component={ AboutPage }/>
            {/* <Route path="/explore" component={ ExplorePage }/> */}
            <PrivateRoute exact path="/inn" component={Dashboard}/>
            <PrivateRoute exact path="/inn/chat" component={Chat}/>
            <PrivateRoute exact path="/inn/discover" component={Discover}/>
            <PrivateRoute exact path="/inn/profile" component={ProfilePage}/>
            <PrivateRoute exact path="/inn/create-post" component={CreatePostPage}/>
            {/* <PrivateRoute exact path="/connect" component={ ConnectPage }/> */}
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}



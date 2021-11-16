import React, {useEffect} from "react"
import { HomePage, AboutPage, LoginPage, SignupPage, ForgotPasswordPage} from './views'
import ProfilePage from './components/dashboard/profilePage'
import NewAbout from './components/about/newAbout'
import CreatePostPage from './components/dashboard/createPost'
import Dashboard from './components/dashboard/dashboard'
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
            <Route path="/new-about" component={NewAbout}/>
            {/* <Route path="/explore" component={ ExplorePage }/> */}
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute exact path="/dashboard/profile" component={ProfilePage}/>
            <PrivateRoute exact path="/dashboard/create-post" component={CreatePostPage}/>
            {/* <PrivateRoute exact path="/connect" component={ ConnectPage }/> */}
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}



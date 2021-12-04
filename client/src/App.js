import React, {useEffect, Suspense} from "react"
import { HomePage, AboutPage, LoginPage, SignupPage, ForgotPasswordPage, SignupDetailsPage} from './views'
import ProfilePage from './components/dashboard/profilePage'
import Discover from './components/dashboard/discover'
import CreatePostPage from './components/dashboard/createPost'
import Dashboard from './components/dashboard/dashboard'
import Projects from './components/dashboard/projects'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import {getUsers} from './actions/users'
import PrivateRoute from "./route/PrivateRoute.js";
import loading from './images/Ripple.gif'
import './index.css'


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Router>
      <Suspense fallback={<img src={loading} alt="loading"></img>}>
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
            <PrivateRoute exact path="/details" component={SignupDetailsPage}/>
            <PrivateRoute exact path="/inn/projects" component={Projects}/>
            <PrivateRoute exact path="/inn/discover" component={Discover}/>
            <PrivateRoute exact path="/inn/profile" component={ProfilePage}/>
            <PrivateRoute exact path="/inn/profile/create-post" component={CreatePostPage}/>
            {/* <PrivateRoute exact path="/connect" component={ ConnectPage }/> */}
          </Switch>
        </div>
      </AuthProvider>
      </Suspense>
    </Router>
  );
}



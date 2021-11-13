import React, {useEffect} from "react"
import { HomePage, SignupPage, AboutPage} from './views'
import ProfilePage from './components/dashboard/profilePage'
import NewHome from './components/homepage/newHome'
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
            <Route exact path="/" component={ HomePage }/>
            <Route exact path="/home" component={ NewHome }/>
            <Route path="/login" component={ SignupPage }/>
            <Route path="/about" component={ AboutPage }/>
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



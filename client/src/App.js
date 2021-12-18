import React, {useEffect, Suspense, useState} from "react"
import { HomePage, AboutPage, LoginPage, SignupPage, ForgotPasswordPage, SignupDetailsPage, SinglePost} from './views'
import ProfilePage from './components/dashboard/profilePage'
import Discover from './components/dashboard/discover'
import CreatePostPage from './components/dashboard/createPost'
import Dashboard from './components/dashboard/dashboardFrame'
import Projects from './components/dashboard/projects'
import ErrorBoundary from "./components/componentSnippets/errorBoundary"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import {getUsers} from './actions/users'
import PrivateRoute from "./route/PrivateRoute.js";
import loading from './images/Ripple.gif'
import './index.css'
import { set } from "firebase/database"


export default function App() {
  const dispatch = useDispatch();
  const [viewPost, setViewPost] = useState(null)

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
              <ErrorBoundary>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/forgot-password" component={ForgotPasswordPage} />
              <Route exact path="/" component={ HomePage }/>
              <Route path="/about" component={ AboutPage }/>
              {/* <Route path="/explore" component={ ExplorePage }/> */}
              <PrivateRoute exact path="/inn" component={Dashboard}/>
              <PrivateRoute exact path="/details" component={SignupDetailsPage}/>
              <PrivateRoute exact path={`/inn/discover/posts/:id`} component={SinglePost}/>
              <PrivateRoute exact path="/inn/projects" component={Projects}/>
              <PrivateRoute exact path="/inn/discover" component={Discover}/>
              <PrivateRoute exact path="/inn/profile" component={ProfilePage}/>
              <PrivateRoute exact path="/inn/profile/create-post" component={CreatePostPage}/>
              {/* <PrivateRoute exact path="/connect" component={ ConnectPage }/> */}</ErrorBoundary>
            </Switch>
          </div>
        </AuthProvider>
      </Suspense>
    </Router>
  );
}



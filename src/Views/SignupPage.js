import React, {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from '../Contexts/AuthContext.js';
import Login from '../Components/LogSign/Login.js'
import Signup from '../Components/LogSign/Signup.js'
import Navbar from '../Components/layout/navbar'
function SignupPage() {
    return (
      <>
        <Navbar />
          <Switch>
            {/* <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
          </Switch>
      </>
    )
}

export default SignupPage;
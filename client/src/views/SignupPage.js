import React from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from '../components/logSign/Login.js'
import Signup from '../components/logSign/Signup.js'
import ForgotPassword from '../components/logSign/ForgotPassword.js';
import Navbar from '../components/layout/newNavbar'
function SignupPage() {
    return (
      <>
        <Navbar />
          <Switch>
            {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
      </>
    )
}

export default SignupPage;
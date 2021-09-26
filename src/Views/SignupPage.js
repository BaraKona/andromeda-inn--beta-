import React from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from '../Components/LogSign/Login.js'
import Signup from '../Components/LogSign/Signup.js'
import ForgotPassword from '../Components/LogSign/ForgotPassword.js';
import Navbar from '../Components/layout/navbar'
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
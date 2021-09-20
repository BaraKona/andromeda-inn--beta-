import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// routes.js
const routes = (
        <Router>
            <Route path="/" component={App}>
            <Route path="/login" component={signup} />
            <Route path="*" component={NoMatch} />
            </Route>
        </Router>
  )

  export default routes
import React, {logErrorToMyService}from "react";
import {Link} from 'react-router-dom'
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div className="errorPage">
            <div className= "errorPageContainer">
                <h1>Something went wrong.</h1>
                <p> Try Reseting your details here </p>
                <Link exact to="/details"> reset </Link>
            </div>
        </div>;
      }

      return this.props.children;
    }
}

export default ErrorBoundary
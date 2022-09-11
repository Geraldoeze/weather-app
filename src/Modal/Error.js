import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: null };
      }

    static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }  

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
        return ( 
           <h1>Something went wrong {this.props.message}</h1>
        );
        }
       return this.props.children; 
    } 
}
 

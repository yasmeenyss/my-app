import { Component } from "react";

class ErrorBoundary  extends Component{
    constructor(props){
      super(props);
      this.state = 
      { hasError: false, 
        error: null,
         errorInfo: null,
         }

    }


    static getDerivedStateFromError(error){
        return { 
            hasError: true,
             error: error,
             };
    }

    componentDidCatch(error, errorInfo){
        console.log("ErrorBoundary caught an error:", error, errorInfo);

    }
    

    render(){
        if(this.state.hasError){
           
            return(
                <div  
                 style={{
        border: "2px solid #999",
        padding: "40px",
        margin: "40px",
        background: "pink",
      }}>
                    <h2>oops! something went wrong</h2>
                 <p>{this.props.fallback}</p>
                 <p>{this.state.error.message}</p>
                </div>
            )

        }
        return this.props.children;
    }
}

export default ErrorBoundary;
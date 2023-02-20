import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const WithAuth = (Component)=>{
    const WrappedComponent = (props) =>{
        const isLoged = useAuth();
        console.log(isLoged)

        if (isLoged) {
          return <Component {...props}/>;
        }
        else{return <Navigate to="/login" replace={true}/>;}
    }
    return WrappedComponent
}

export {WithAuth}
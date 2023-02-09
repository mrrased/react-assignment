import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

interface Props {
    children: React.ReactNode
}


const PrivateRoute = ({ children }: Props) =>{

    const location = useLocation();

    if(false){

        
    }
    if(true){

        return children
    }

    return <Navigate to="/" state={{ from: location }} replace />

}
export default PrivateRoute;
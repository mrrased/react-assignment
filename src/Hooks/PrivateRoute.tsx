import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

interface Props {
    children: React.ReactNode
}


const PrivateRoute = ({ children }: Props) =>{

    const location = useLocation();


    const localData = JSON.parse(localStorage.getItem('user_info')!)


    if(localData){

        return <>{children}</> 
    }


    alert('Before access this page must be enter your information')
    

    return <Navigate to="/" state={{ from: location }} replace />

}
export default PrivateRoute;
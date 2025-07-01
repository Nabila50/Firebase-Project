import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';
import { TbLocationExclamation } from 'react-icons/tb';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user ?.email){
        return children;
    }
    return <Navigate state ={location.pathname} to = "/auth/login"></Navigate>

    // if > user thake return children
 

    // if > user na thake tahole negivate to login page
};

export default PrivateRoute;
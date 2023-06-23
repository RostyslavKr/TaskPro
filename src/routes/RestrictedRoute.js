import { useUser } from "hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const RestrictedRoute = () => {
    const {isLogged} = useUser();
    return isLogged? 
    <Navigate to='/home' />
    :
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet/> 
    </Suspense> 
}

/* import { useUser } from '../hooks/useUser';
import { Navigate } from "react-router-dom"

const RestrictedRoute = ({ component: Component, redirectTo="/"}) => {
    const { isLogged } = useUser();

    return (
        isLogged ? <Navigate to={redirectTo} /> : <Component />
    )
};

export default RestrictedRoute; */
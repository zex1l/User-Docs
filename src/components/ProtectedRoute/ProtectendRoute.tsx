import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { getAuthToken } from "../../helpers/token";



const ProtectendRoute : FC <PropsWithChildren> = ({children}) => {
    const token  = getAuthToken()

    if(!token) return <Navigate to={'/sign_in'}/>


    return children
};

export default ProtectendRoute;
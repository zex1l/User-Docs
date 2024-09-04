import { FC, PropsWithChildren} from "react";
import { Navigate } from "react-router-dom";
import {  useAppSelector } from "../../store/store";
import { getisAuth} from "../../store/slices/authSlice";




const ProtectendRoute : FC <PropsWithChildren> = ({children}) => {
    const isAuth = useAppSelector(getisAuth)
    

    if(!isAuth) return <Navigate to={'/sign_in'}/>


    return children
};

export default ProtectendRoute;
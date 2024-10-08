import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import Loading from "../routes/Loading";

export default function  PrivateRoute() {
    //context
    const [auth] = useAuth();
     // state
    const [ok,setOk]= useState(false);

    useEffect(()=>{
        if (auth?.token){
            setOk(true);
        }else{
            setOk(false);
        }
    },[auth?.token]);

    return ok ? <Outlet /> : <Loading />;

};
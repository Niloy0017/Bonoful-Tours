import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Authroute = ({ children }) => {

    const navigate = useNavigate();
    let isloginSelector = useSelector(state => state.auth.islogin);
    console.log("isloginSelector in auth route ",isloginSelector);

    useEffect(()=>{
        if (!isloginSelector) {
            navigate("/login")
        }    
    },[])

    return (
        <div>{children}</div>
    )
}




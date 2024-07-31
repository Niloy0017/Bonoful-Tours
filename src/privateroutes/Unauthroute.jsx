import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Unauthroute = ({ children }) => {

    const navigate = useNavigate();
    let isloginSelector = useSelector(state => state.auth.islogin);
    console.log("isloginSelector in unauth route ",isloginSelector);

    useEffect(()=>{
        if (isloginSelector)
            {
                console.log(" unauth if ");
                navigate("/dashboard");
            }
    },[])

    return (
        <div> {children} </div>
    )
}





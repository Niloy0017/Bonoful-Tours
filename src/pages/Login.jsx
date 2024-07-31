import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reduxslices/authslice";
import { cleartourdetail } from "../redux/reduxslices/cartslice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formsubmit, setFormsubmit] = useState(0);
    const navigate = useNavigate();
    const { uselessHandler } = useOutletContext();

    let idSelector = useSelector(state => state.cart.tourdetailid);

    const dispatch = useDispatch();
    const isloginSelector = useSelector(state => state.auth.islogin);

    useEffect(() => {
        if (isloginSelector) 
        {
            console.log("isloginSelector in if ", isloginSelector);
            console.log("idSelector in if ", idSelector);
            uselessHandler();

            if (idSelector) 
            {
                console.log("idSelector ", idSelector);
                navigate(`${idSelector}`);
                dispatch(cleartourdetail());
            }
            else 
            {
                console.log("navigating tours isloginSelector value : ", isloginSelector);
                navigate('/tours');
            }
        }
        else if (formsubmit && !isloginSelector) 
        {
            toast.error('Login failed. Please check your info.');
        }

    }, [isloginSelector,formsubmit]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    }

    const formOnSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            console.log("login form values are:");
            console.log("email : ", email, "password : ", password);

            const dispatcher = dispatch(login({ email, password }));
            console.log("dispatcher ", dispatcher);

            setFormsubmit(prev => prev + 1);
            console.log("formsubmit ",formsubmit);
            console.log("isloginSelector on formsubmit ", isloginSelector);
        }
    }

    function registerhandler() {
        navigate("/register");
    }

    return (
        <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center vw-100 p-3">

            <div className="col-12 col-md-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-100" />
            </div>

            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">

                <div className="h1">Log In</div>
                {/* <h1>Log In</h1> */}

                <form className="d-flex flex-column justify-content-center align-items-center p-3 mt-3 gap-3">

                    <div className="d-flex flex-column ">
                        <label htmlFor="mail" className="fontstyle">Email</label>
                        <input name="email" id="mail" type="email" placeholder="enter your email"
                            value={email} onChange={handleInputChange} />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="password" className="fontstyle">Password</label>
                        <input name="password" id="password" type="password" placeholder="enter your password"
                            value={password} onChange={handleInputChange} />
                    </div>

                    <button id="btn" style={{ backgroundColor: 'coral' }} type="button" onClick={formOnSubmit}>LOGIN</button>

                </form>

                <p className="fontstyle">Don't have an account ? <span className="text-danger cursor" onClick={registerhandler}>Register</span></p>
            </div>

        </div>
    )
}

export default Login;


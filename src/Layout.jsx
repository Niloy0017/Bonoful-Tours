import { Outlet, useNavigate } from "react-router-dom";
import AltHeadbar from "./navbars/AltHeadbar";
import Headbar from "./navbars/Headbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { logout } from "./redux/reduxslices/authslice";
import Footer from "./components/Footer";
import { clearcart } from "./redux/reduxslices/cartslice"; 
import { clearorder } from "./redux/reduxslices/orderslice";

const Layout = () => {
    const isloginSelector = useSelector(state => state.auth.islogin);

    useEffect(() => {
        console.log("islogin : ", isloginSelector);
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const uselessHandler = () => {
        console.log("oproyojonio function");
    };

    const logoutHandler = () => {
        dispatch(logout());
        dispatch(clearcart()); 
        dispatch(clearorder()); 
        navigate("/register");
    };

    return (
        <>
            <div className="wrapper">
                {isloginSelector ? <AltHeadbar logoutHandler={logoutHandler}></AltHeadbar> : <Headbar></Headbar>}

                <div className="patro">
                    <Outlet context={{ uselessHandler }} ></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Layout;





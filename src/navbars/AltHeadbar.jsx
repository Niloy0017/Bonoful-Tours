import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function AltHeadbar({ logoutHandler }) {
   
    const user = useSelector(state => state.auth.user);

    const email = user?.email || "";
    const emailshort = email.substring(0, 2).toUpperCase();

    return (
        <nav className="navbar navbar-light p-3 justify-content-evenly align-items-center gap-2 " style={{ backgroundColor: '#0E3386' }}>
            <span className="navbar-brand text-white">Bonoful <span className="d-none d-md-inline">Tours & Travels</span></span>

            <Link to='/' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <span>Home</span>
            </Link>
            <Link to='/about' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <span>About</span>
            </Link>
            <Link to='/tours' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <span>Tours</span>
            </Link>
            <Link to='/cart' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <Link to='/order' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <span>Orders</span>
            </Link>
            {email && (
                <Link to='/dashboard' className="navbar-brand text-white email text-sm-md rounded-circle bg-primary">
                    <span>{emailshort}</span>
                </Link>
            )}
            <div onClick={logoutHandler} className="navbar-brand text-white nav-link text-sm-lg cursor-pointer">Logout</div>
        </nav>
    );
}

export default AltHeadbar;




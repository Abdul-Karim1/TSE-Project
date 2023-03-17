import React from 'react';
import logo from '../assets/logo512.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import { setLogout } from '../reducers/logout';
import { useDispatch } from "react-redux";

function navbar() {


    return (
        <div className="navbar">
            <div className='leftSide'>
                <img src={logo} alt="logo" />
                {/* <div className='hiddenLinks' id={openLinks ? "open" : "close"}>
                    <Link to="/">Home</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/admin">Dashboard</Link>
                </div> */}
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Browse</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">About Us</Link>
                <Link to="/" onClick={() => useDispatch(setLogout())}>Log Out</Link>
                <Link to="/dashboard">Dashboard</Link>
                <button>
                    <ReorderIcon />
                </button>
            </div>

        </div >
    )
}

export default navbar


import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpeg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Tired of Your Old Phone? </h1>
                <p> MOBIZILLA IS HERE TO RESCUE!</p>
                <Link to="/menu">
                    <button> EXCHANGE NOW </button>
                </Link>
                <br></br>                <br></br>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Home

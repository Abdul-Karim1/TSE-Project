import React from "react";
import AboutBack from "../assets/Left.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBack})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          <b>ABSTRACT:</b>
          <br></br>
          MOBIZILLA is a mobile exchange website where different users can login and post specifications, pictures, and condition of their phone along with their locations. And on the other hand, users can also search for the mobiles that they consider as something of same level as their mobile phone. Moreover, in case of fraudulent people can also contact customer service which will surely help them out.
          <br></br>
          <b>PURPOSE:</b>
          <br></br>
          Instead of an exchange of money people will be able to get phone of that worth. It will make it easy for both users.
          <br></br>
          <b>SCOPE:</b>
          <br></br>
          None of the existing websites are mobile exchange specific, MOBIZILLA will be a clear platform for the people who try to find ways for easy exchange.

        </p>
      </div>
    </div>
  );
}

export default About;

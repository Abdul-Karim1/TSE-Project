import React, { Component } from "react";
import "../styles/Contact.css";

class Signin extends Component {
  constructor(props) { //data response will come to this constructor as prop
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Signed In Successfully");
          //This line tells us that we have logged in (On Local Storage)
          window.localStorage.setItem("token", data.data);
          window.location.href = "./menu";
        }
        else {
          alert("Invalid Email Or Password");
        }
      });
  }
  render() {
    return (
      <div className="contact center" >

        <div className="rightSide">
          <h1>Welcome Back! Sign In To Continue</h1>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Your Email</label>
            <input name="email" placeholder="Enter email..." type="email" required onChange={(e) => this.setState({ email: e.target.value })} />

            <label htmlFor="password">Enter Password</label>
            <input name="password" placeholder="Enter Password..." type="Password" required onChange={(e) => this.setState({ password: e.target.value })} />

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}



export default Signin;

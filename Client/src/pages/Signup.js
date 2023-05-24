import React, { Component } from 'react';
import Left from '../assets/Left.jpg';
import '../styles/Contact.css';

class Signup extends Component {
  /*The given  class is named "Signup" and extends the "Component" class.
   It has a constructor that initializes the state with properties such as
   userName, fullName, email, description, and password. It also has a 
   handleSubmit function that handles form submission by making a POST request to a local server*/
  
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      fullName: '',
      email: '',
      description: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    // handles form submission by making a POST request to a local server
    e.preventDefault();
    const { userName, fullName, email, description, password } = this.state;
    console.log(userName, fullName, email, description, password);
    fetch('http://localhost:5000/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      }, //data format rules
      body: JSON.stringify({
        userName,
        fullName,
        email,
        description,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'Registered') {
          /*verifies from server.js file and cross checks all values with values in database
           and gives message of Registered and if values do not match it gives message of Invalid Response*/

          console.log(data, 'userRegistered');
          alert('User Registered');
        } else {
          alert('Invalid Response');
        }
      });
  }
  render() {
    return (
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${Left})` }}
        ></div>
        <div className="rightSide">
          <h1> Sign Up Today!</h1>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="Username">UserName</label>
            <input
              name="Username"
              placeholder="Select a Unique Username..."
              type="text"
              required
              onChange={(e) => this.setState({ userName: e.target.value })}
            />

            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              placeholder="Enter full name..."
              type="text"
              required
              onChange={(e) => this.setState({ fullName: e.target.value })}
            />

            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="Enter email..."
              type="email"
              required
              onChange={(e) => this.setState({ email: e.target.value })}
            />

            <label htmlFor="message">
              Your Current Device with Description
            </label>
            <textarea
              rows="6"
              placeholder="Enter Description..."
              name="message"
              required
              onChange={(e) => this.setState({ description: e.target.value })}
            ></textarea>

            <label htmlFor="password">Choose Password</label>
            <input
              name="password"
              placeholder="Enter Password..."
              type="Password"
              required
              onChange={(e) => this.setState({ password: e.target.value })}
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;

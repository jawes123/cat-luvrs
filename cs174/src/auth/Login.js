import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import {  useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    // get the query string parameters
    const urlParams = new URLSearchParams(window.location.search);

    setTimeout(function() {
      if (urlParams.get('login_failed') === 'true') {
        // display an error message
        alert('Login failed. Please check your username and password and try again.');
      }
    }, 500);

    history.push('/login');

  }, []);
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //http://cos-cs106.science.sjsu.edu/~014054599/project/login.php

  return (
    <div className="login">
      <div className="login-login">
        <div className="login-overlap-group">
          <div className="login-overlap">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="description">pet adoption matching site</div>
            <div className="login-form">
              <form
                action="http://cos-cs106.science.sjsu.edu/~014054599/project/login.php"
                method="post"
              >
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button type="submit" className="login-btn">
                Login
                </button>
              </form>
              <Link to="/register" className="link">
                Create an Account
              </Link>
            </div>
          </div>
          <h1 className="login-h-1">Find your cuddle buddy today</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

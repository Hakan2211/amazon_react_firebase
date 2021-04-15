import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";

import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })

      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            vlaue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={classes.login__signInButton}
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Clone Page Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice.
        </p>
        <button className={classes.login__registerButton} onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;

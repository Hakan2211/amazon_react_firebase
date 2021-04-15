import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/layout/Header/Header";
import Home from "./components/layout/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/authentication/Login/Login";
import Payment from "./pages/Checkout/Payment/Payment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./pages/authentication/firebase";
import { useStateValue } from "./context/StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IUYEeI9Uk2lKdUd4C2Ng4Km7j6Cn02ZKhJB1OpXpeD4tUmL7bh1Zu1jId3Zo9lllVgr2AqiPE0vAUlIggpFRLd900RbCLliUT"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";

import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "../../../context/StateProvider";

import { Link } from "react-router-dom";
import { auth } from "../../../pages/authentication/firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          className={classes.header__logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className={classes.header__search}>
        <input className={classes.header__searchInput} type="text" />
        <SearchIcon className={classes.header__searchIcon} />
      </div>

      <div className={classes.header__nav}>
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className={classes.header__option}
          >
            <span className={classes.header__optionLineOne}>
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className={classes.header__optionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Returns</span>
          <span className={classes.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className={classes.header__optionBasket}>
          <ShoppingBasketIcon />
          <span
            className={
              (classes.header__optionLineTwo, classes.header__basketCount)
            }
          >
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;

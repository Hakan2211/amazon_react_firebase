import React from "react";

import classes from "./Checkout.module.css";
import Subtotal from "./Subtotal/Subtotal";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img20/BAU/bau_40_2020_maple_np_770x80._CB659357927_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user.email}</h3>
          <h2 className={classes.checkout__title}>Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/**CheckoutProduct */}
          {/**BasketItem */}
        </div>
      </div>
      <div className={classes.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

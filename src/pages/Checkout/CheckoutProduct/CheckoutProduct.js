import React from "react";
import classes from "./CheckoutProduct.module.css";
import { useStateValue } from "../../../context/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img src={image} alt="" className={classes.checkoutProduct__image} />

      <div className={classes.checkoutProduct__info}>
        <p className={classes.checkoutProduct__title}>{title}</p>
        <p className={classes.checkoutProduct__price}>
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className={classes.checkoutProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

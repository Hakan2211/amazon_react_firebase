import React from "react";
import classes from "./Products.module.css";
import { useStateValue } from "../../context/StateProvider";

const Products = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className={classes.products}>
      <div className={classes.products__info}>
        <p>{title}</p>
        <p className={classes.products__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.products__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Products;

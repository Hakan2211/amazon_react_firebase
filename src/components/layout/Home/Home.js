import React from "react";
import classes from "./Home.module.css";

import Products from "../../Products/Products";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <img
          className={classes.home__image}
          src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/Coming2America/C2A2_2021_GWBleedingHero_POST_XSite_1500x600_PV_de-DE._CB657741957_.jpg"
          alt=""
        />

        <div className={classes.home__row}>
          <Products
            id="1"
            title={"The lean startup"}
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/510AO7UjVPL._SX331_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Products
            id="2"
            title={
              "Creality Ender-5 Pro 3D-Printer with meatl extrusion 220*220*300"
            }
            price={399.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/612nun1Kz3L._SX522_.jpg"
            }
            rating={4}
          />
        </div>
        <div className={classes.home__row}>
          <Products
            id="3"
            title={
              "Meze 99 Classics Walnut Silver audiophil Over-Ear Headphones"
            }
            price={299.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91jfTqbZPRL._AC_SX679_.jpg"
            }
            rating={5}
          />
          <Products
            id="4"
            title={"The new Echo Dot 4.Gen with Smart Speaker Alexa."}
            price={39.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71Q9d6N7xkL._AC_SX679_.jpg"
            }
            rating={4}
          />
          <Products
            id="5"
            title={
              "Samsung Galaxy Book Flex (13.33) Notebook (Intel Core i5 8GB RAM,256 GB SSD,S Pen,Windows 10 Home) royal blue"
            }
            price={1299.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81PTcnu2LCL._AC_SX450_.jpg"
            }
            rating={4}
          />
        </div>
        <div className={classes.home__row}>
          <Products
            id="6"
            title={
              "New IPad Pro (12.9, Wi-Fi, 256 GB) -Space Grey (4. Generation)"
            }
            price={1129.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._AC_SX679_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

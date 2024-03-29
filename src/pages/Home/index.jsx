import React from "react";
import Car from "../Car";
import Advertisement from "./Advertisement";
import Store from "./Store";
import Order from "./Order";
import BestSelling from "./BestSelling";
import Choose from "./Choose";
import Navbar from "../../components/Navbar";
import Category from "../Category";
import Details from "../Details";

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Car />
      <Order />
      <BestSelling />
      <Choose />
      <Advertisement />
      <Store />
      <Details />
    </>
  );
};

export default Home;

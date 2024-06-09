import React from "react";
import Productitems from "../components/Productitems";
import Navbar from "../components/Navbar";

// the products data is already fetched using API in app.jsx file
const Products = () => {
  return (
    <>
      <Navbar/>
      <Productitems />
    </>
  );
};

export default Products;

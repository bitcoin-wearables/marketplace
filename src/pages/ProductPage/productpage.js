import React, { useEffect, useState } from "react";

import "./productpage.css";
import ProductCard from "../../components/products/ProductCardComponent.js";
import { productList } from "./productList";
const style =
  "body,.footer-container,.nav-container {background-color: #f4ea2f; color: black} .nav-container .logo h1 { color: black;}.nav-container .nav-links ul li a {color: black;font-weight: 600;}";
function Productpage() {
  const [pageActive, setPageActive] = useState(false);

  useEffect(() => {
    setPageActive(true);
  }, []);
  const products = productList.map((product, index) => {
    return <ProductCard key={index} {...product}></ProductCard>;
  });

  return (
    <section className="productPageContainer">
      <style>{pageActive && style}</style>
      <header>
        <h1>Explore</h1>
      </header>
      <div className="productPageBody">{products}</div>
    </section>
  );
}

export default Productpage;

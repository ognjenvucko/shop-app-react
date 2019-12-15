import React, { useState, useEffect } from "react";
import ProductsContext from "../context/productsContext";

const PRODUCTS_API =
  "https://private-5815fe-recommendationsknip.apiary-mock.com/products";

const withProducts = Component => {
  return function(props) {
    const [products, setProducts] = useState();
    useEffect(() => {
      fetch(PRODUCTS_API)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
        });
    }, []);
    return (
      <ProductsContext.Provider value={products}>
        <Component {...props} />
      </ProductsContext.Provider>
    );
  };
};

export default withProducts;

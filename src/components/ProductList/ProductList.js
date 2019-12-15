import React, { useContext } from "react";
import "./ProductList.scss";
import ListItem from "../ListItem/ListItem";
import ProductsContext from "../../context/productsContext";
import { getProductThumbnail } from "../../helpers/products";
import Loading from "../Loading/Loading";

const ProductList = function() {
  const products = useContext(ProductsContext);
  if (!products) {
    return <Loading />;
  }
  return (
    <div className="product-overview">
      {products.map(({ id, images, title, price }) => {
        return (
          <ListItem
            key={id}
            id={id}
            thumb={getProductThumbnail(images)}
            title={title}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;

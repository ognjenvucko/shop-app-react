import React, { useContext, useState } from "react";
import classnames from "classnames";
import "./ProductPreview.scss";
import ProductsContext from "../../context/productsContext";
import { getProductById } from "../../helpers/products";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import GalleryImage from "../GalleryImage/GalleryImage";
import CommentWidget from "../CommentWidget/CommentWidget";

const ProductPreview = function() {
  const [selectedImage, setSelectedImage] = useState();
  const [isSpecificationCollapsed, setIsSpecificationCollapsed] = useState(
    true
  );
  const products = useContext(ProductsContext);
  const { id } = useParams();
  if (!products) {
    return <Loading />;
  }
  const product = getProductById(products, id);
  if (!product) {
    return <div className="product-preview__not-found">Product Not Found</div>;
  }

  const { title, description, specification, price, images } = product;

  const specsContainerClass = classnames("product-preview__specs-text", {
    "product-preview__specs-text--collapsed": isSpecificationCollapsed
  });
  return (
    <div className="product-preview">
      <div className="product-preview__main">
        <div
          className="product-preview__img"
          style={{
            backgroundImage: `url(${selectedImage || images[0].original})`
          }}
        />
        <div className="product-preview__details">
          <div className="product-preview__details-title">{title}</div>
          <div className="product-preview__details-description">
            {description}
          </div>
          <div className="product-preview__details-specs">
            <div
              className="product-preview__specs-label"
              onClick={() => {
                setIsSpecificationCollapsed(!isSpecificationCollapsed);
              }}
            >
              Product specs
            </div>
            <div className={specsContainerClass}>{specification}</div>
          </div>
          <div className="product-preview__details-price">Price: ${price}</div>
        </div>
      </div>
      <div className="product-preview__gallery">
        {product.images.map(({ thumb, original }, idx) => {
          return (
            <GalleryImage
              key={idx}
              img={thumb}
              onSelect={() => {
                setSelectedImage(original);
              }}
            />
          );
        })}
      </div>
      <div className="product-preview__comments">
        <CommentWidget />
      </div>
    </div>
  );
};

export default ProductPreview;

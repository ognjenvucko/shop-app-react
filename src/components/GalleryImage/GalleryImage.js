import React from "react";
import "./GalleryImage.scss";

function GalleryImage({ img, onSelect }) {
  return (
    <div
      className="gallery-image"
      style={{
        backgroundImage: `url(${img})`
      }}
      onClick={onSelect}
    />
  );
}

export default GalleryImage;

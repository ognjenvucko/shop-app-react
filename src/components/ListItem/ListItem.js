import React from "react";
import "./ListItem.scss";
import { withRouter } from "react-router";
import { compose } from "recompose";

const ListItem = function({ id, title, thumb, price, history }) {
  return (
    <div
      className="list-item__wrapper"
      onClick={() => {
        history.push(`/product/${id}`);
      }}
    >
      <div
        className="list-item__thumb"
        style={{
          backgroundImage: `url(${thumb})`
        }}
      />
      <div className="list-item__info">
        <div className="list-item__title">{title}</div>
        <div className="list-item__price">Price: {price}</div>
      </div>
    </div>
  );
};

export default compose(withRouter)(ListItem);

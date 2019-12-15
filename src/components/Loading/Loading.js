import React from "react";
import "./Loading.scss";

function Loading({ text = "Loading" }) {
  return <div className="loading__wrapper">{text}</div>;
}

export default Loading;

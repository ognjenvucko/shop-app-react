import React from "react";
import { withRouter } from "react-router";

function Header(props) {
  return (
    <header
      onClick={() => {
        props.history.push("/");
      }}
    />
  );
}

export default withRouter(Header);

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import withProducts from "../../hoc/withProducts";
import ProductPreview from "../ProductPreview/ProductPreview";
import "./App.scss";
import Header from "../Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <ProductPreview />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default withProducts(App);

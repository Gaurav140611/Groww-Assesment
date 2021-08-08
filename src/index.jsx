import React from "react";
import ReactDOM from "react-dom";
import App from "./App/app";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Individual_Bank from "./Components/Individual_Bank_Details/individual_Bank";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/all-banks" />
        </Route>
        <Route exact path="/all-banks" component={App} />
        <Route exact path="/bank-details/:ifsc" component={Individual_Bank} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

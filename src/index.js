import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// layouts
 

// views without layouts

 import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
 
      {/* <Route path="./Landing" exact component={Landing} /> */}
      <App/>
      
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

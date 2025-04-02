// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

// const domain = "dev-35xklbw3ze8ufv2c.us.auth0.com";
// const clientId = "UMK8WIy6UOY3B6a0MHcH0ZBThDyIIWdz";
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = "https://dev-35xklbw3ze8ufv2c.us.auth0.com/api/v2/";

const auth0Config = {
    domain: "dev-35xklbw3ze8ufv2c.us.auth0.com",
    clientId: "UMK8WIy6UOY3B6a0MHcH0ZBThDyIIWdz",
    authorizationParams: {
        authorizationParams: {
            redirect_uri: "http://localhost:5173/dashboard",
          }
          
    },
  };
  
ReactDOM.createRoot(document.getElementById("root")).render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: window.location.origin }}
    >
        <App />
    </Auth0Provider>
);

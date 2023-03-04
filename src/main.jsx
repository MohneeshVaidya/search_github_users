import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import GithubProvider from "./contexts/GithubProvider";
import AppProvider from "./contexts/AppProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uo3z4x0l41lcu4xr.us.auth0.com"
      clientId="6R80NbM25b85XWY32WyuRTcbDtlK3MW8"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <AppProvider>
        <GithubProvider>
          <App />
        </GithubProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

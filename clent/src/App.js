import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing/landing";
import { PublicPage } from "./components_handler/public_component";
import { PrivateComponent } from "./components_handler/private_component";
import { Home } from "./components/landing/home";
import DashBoard from "./components/dashboard/dashboard";
import { AuthContextProvider } from "./context/auth-context";
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <PublicPage
            restricted={true}
            component={Landing}
            exact
            path="/accounts"
          />
          <PublicPage restricted={false} component={Home} exact path="/" />
          <PrivateComponent
            restricted={true}
            component={DashBoard}
            exact
            path="/dashboard"
          />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

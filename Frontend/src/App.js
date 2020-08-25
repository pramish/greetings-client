import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import { PublicPage } from './ComponentsHandler/PublicComponent';
import { PrivateComponent } from './ComponentsHandler/PrivateComponent';
import { Home } from './Components/Landing/Home';
import DashBoard from './Components/Landing/Dashboard';
import { AuthContextProvider } from './Context/auth-context';
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <PublicPage
            restricted={true}
            component={Landing}
            exact
            path='/accounts'
          />
          <PublicPage restricted={false} component={Home} exact path='/' />
          <PrivateComponent
            restricted={true}
            component={DashBoard}
            exact
            path='/dashboard'
          />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

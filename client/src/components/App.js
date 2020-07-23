import React from 'react';
import { Route,Switch } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Login from "./RegisterLogin"
function App() {
  return (
    <div>
      <Switch>
      <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
        
      </Switch>

    </div> 
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/main/main';
import Auth from './components/auth/auth';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route
             exact path = "/" 
             component = {Main}
             />
            <Route
             path = "/auth" 
             component = {Auth}
             />
        </Switch>

    </div>
  );
}

export default App;

import React from 'react';
import AboutTeam from './sections/AboutTeam/AboutTeam';
import { Switch, Route } from 'react-router-dom';
import Comments from './sections/Comments/Comments';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Salom</h1>
        </Route>
        <Route path="/about">
          <h1>no</h1>
        </Route>
        <Route path="/home">
          <AboutTeam />
          <Comments />
        </Route>
        {/* Can also use a named `children` prop */}
      </Switch>
    </div>
  );
}

export default App;

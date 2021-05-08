import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/404" component={Error} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

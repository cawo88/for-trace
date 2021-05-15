import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
// import { Home } from './pages/Home';
import { Error } from './pages/Error';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Suspense
            fallback={
              <article style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1 style={{ fontSize: '42px' }}>Laden...</h1>
              </article>
            }
          >
            <Route exact path="/" component={Home} />
            <Route path="/datenschutz" component={PrivacyPolicy} />
          </Suspense>
          <Route path="/404" component={Error} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

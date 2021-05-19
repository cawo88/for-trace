import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Loader } from './components/Loader';
import { Error } from './pages/Error';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })));

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/datenschutz" component={PrivacyPolicy} />
              <Route path="/404" component={Error} />
              <Redirect to="/404" />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export default App;

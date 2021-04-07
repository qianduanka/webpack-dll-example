import React, { Component, lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/home'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
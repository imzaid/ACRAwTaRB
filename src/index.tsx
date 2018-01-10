import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import './index.css';

import App from 'src/routes/App';
import Greeting from 'src/routes/Greeting';
import Increment from 'src/routes/Increment';
import Test from 'src/components/Test';
import { NotFound404 } from 'src/components/NotFound404';

import updateState from 'src/reducers/index';

const store = createStore(updateState);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact={true} path='/' component={App} />
        <Route path='/test' component={Test} />
        <Route path='/greeting' component={Greeting} />
        <Route path='/increment' component={Increment} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

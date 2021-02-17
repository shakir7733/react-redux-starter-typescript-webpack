import React from 'react'
import ReactDom from 'react-dom';
import App from './App'
import { Provider, useDispatch } from 'react-redux';
import { createBrowserHistory } from 'history';
import rootStore from './store/configureStore';
import environment from 'environment';

(async (window) => {
  const rootEl = document.getElementById('app');
  const initialState = {};


  const render = (Component, el) => {
    const history = createBrowserHistory({ basename: environment.route.baseRoute });
    const store = rootStore(initialState, history);
    ReactDom.render(
      <Provider store={store}>
        <Component history={history} dispatch={store.dispatch} />
      </Provider>,
      el
    );
  };

  render(App, rootEl);
})(window);
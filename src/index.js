import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import adsSaga from './sagas';
import reducer from './reducers';
import App from './containers/App';
import './styles.css';

let sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(adsSaga);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

ReactDOM.render(
  <Root/>, document.getElementById('root'));

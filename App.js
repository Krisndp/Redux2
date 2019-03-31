import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import store from './redux/Store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

//defaultState

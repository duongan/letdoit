import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DrawerNav from './navigations/DrawerNav';
import reducer from './reducers';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DrawerNav />
      </Provider>
    );
  }
}

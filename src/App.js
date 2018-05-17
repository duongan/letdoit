import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DrawerNav from './navigations/DrawerNav';
import store from './store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DrawerNav />
      </Provider>
    );
  }
}

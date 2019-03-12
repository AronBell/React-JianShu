import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Header from './common/header/index';
import store from './store';

class App extends Component {
  render() {
    return (
      // Provider内所有组件都可使用store数据(Provider将store内数据都提供给Header组件)
      <Provider store={store}>
        <Header/>
      </Provider>
    )
  }
}

export default App;

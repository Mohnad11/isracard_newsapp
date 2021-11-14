import React from 'react';
import Router from './src/Router';
import {Provider as StoreProvider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './src/redux/AppReducers';
const App = () => {
  const store = createStore(AppReducer, applyMiddleware(thunk));
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
};

export default App;

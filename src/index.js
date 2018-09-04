import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Add this import:
import { AppContainer } from 'react-hot-loader';

const store = createStore((state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, globalCounter: state.globalCounter + 1 };
    default:
      return state;
  }
}, {
  globalCounter: 0
});

// Wrap the rendering in a function:
const render = () => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
registerServiceWorker();

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
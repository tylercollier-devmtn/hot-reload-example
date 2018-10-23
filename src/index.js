import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './ducks/store';
import { BrowserRouter } from 'react-router-dom';

// Add this import:
import { AppContainer } from 'react-hot-loader';

const store = configureStore()

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

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
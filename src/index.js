import App from './App';
import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'It\'s my first post.', likesCount: 18},
  {id: 3, message: '3d', likesCount: 11},
  {id: 4, message: '2d', likesCount: 6},
  {id: 5, message: '1d', likesCount: 0},
]

let dialogs = [
  {id: 1, name: 'Дима'},
  {id: 2, name: 'Андрей'},
  {id: 3, name: 'Света'},
  {id: 4, name: 'Саша'},
  {id: 5, name: 'Виктор'},
  {id: 6, name: 'Валера'},
]

let messages = [
  {id: 1, message: 'Привет'},
  {id: 2, message: 'Какой твой любимый ЯП?'},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

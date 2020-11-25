import App from './App';
import state, { subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, updateNewPostText} from './redux/state'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)


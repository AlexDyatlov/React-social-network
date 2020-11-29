import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
  _state: {
    profilePage: {
      posts: [ 
        {id: 1, message: 'Привет, как ты?', likesCount: 12},
        {id: 2, message: 'Это мой первый пост', likesCount: 18},
        {id: 3, message: 'Привет, как тебя зовут?', likesCount: 11},
        {id: 4, message: 'Какие сегодня новости?', likesCount: 6},
        {id: 5, message: 'Новый тренд', likesCount: 4},
      ],
      newPostText: 'it-kryto'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Дима'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Виктор'},
        {id: 6, name: 'Валера'},
      ],
      messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Какой твой любимый ЯП?'},
        {id: 3, message: 'Новоё сообщение 1'},
        {id: 4, message: 'Новоё сообщение 2'},
        {id: 5, message: 'Новоё сообщение 3'},
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state; // контекст вызова метода getState()
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель
  },

  dispatch(action) { 
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  }
}

export default store;
window.store = store;
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

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

  dispatch(action) { // {type: 'ADD-POST'} 
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messages.push({id: 6, message: body})
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => ({type: 'ADD_POSTT'})
export const updateNewPostTextActionCreator = (text) => 
  ({type: 'UPDATE_NEW_POST_TEXT', newText: text})

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) => 
    ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body})
  

export default store;
window.store = store;
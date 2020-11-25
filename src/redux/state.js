let rerenderEntireTree = () => {
  console.log('State changed')
}

let state = {
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
    messages: [
      {id: 1, message: 'Привет'},
      {id: 2, message: 'Какой твой любимый ЯП?'},
      {id: 3, message: 'Новоё сообщение 1'},
      {id: 4, message: 'Новоё сообщение 2'},
      {id: 5, message: 'Новоё сообщение 3'},
    ],
    dialogs: [
      {id: 1, name: 'Дима'},
      {id: 2, name: 'Андрей'},
      {id: 3, name: 'Света'},
      {id: 4, name: 'Саша'},
      {id: 5, name: 'Виктор'},
      {id: 6, name: 'Валера'},
    ],
  },
  sidebar: {}
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer; // наблюдатель
}

export default state
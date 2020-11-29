const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [ 
    {id: 1, message: 'Привет, как ты?', likesCount: 12},
    {id: 2, message: 'Это мой первый пост', likesCount: 18},
    {id: 3, message: 'Привет, как тебя зовут?', likesCount: 11},
    {id: 4, message: 'Какие сегодня новости?', likesCount: 6},
    {id: 5, message: 'Новый тренд', likesCount: 4},
  ],
  newPostText: 'it-kryto'
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
        state.posts.push(newPost)
        state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
      return state
    default: 
      return state
  }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => 
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer
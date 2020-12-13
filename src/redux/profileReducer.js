const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [ 
    {id: 1, message: 'Привет, как ты?', likesCount: 12},
    {id: 2, message: 'Это мой первый пост', likesCount: 18},
    {id: 3, message: 'Привет, как тебя зовут?', likesCount: 11},
    {id: 4, message: 'Какие сегодня новости?', likesCount: 6},
    {id: 5, message: 'Новый тренд', likesCount: 4},
  ],
  newPostText: 'it-kryto',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default: 
      return state
  }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => 
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer
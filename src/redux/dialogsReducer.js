const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
      return {
        ...state, 
        newMessageBody: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      }
    default:
      return state
  } 
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body) => 
    ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})

export default dialogsReducer
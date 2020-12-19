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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      }
    default:
      return state
  } 
}

export const sendMessageCreator = (newMessageBody) => ({type: 'SEND-MESSAGE', newMessageBody})

export default dialogsReducer
import { messageList,  } from "./message-list";

const SELECT_DIALOG = 'SELECT-DIALOG';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_NEW_MESSAGE_BODY = 'ADD-NEW-MESSAGE-BODY';

let initialState = {
    dialogs : [
        {id: 0, name: "Dimych"},
        {id: 1, name: "Sanya"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Valery"},
      ],
    activeDialogId : 0,                
    messages: messageList[0],  
    newMessageBody: 'sdfdsf',
}



const dialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case SELECT_DIALOG: {
            return {
              ...state,
              messages: [...state.messages]
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
              ...state,
              newMessageBody: action.messageBody
            };
        }

        case ADD_NEW_MESSAGE_BODY: {          
            return {
              ...state,
              messages: [...state.messages, {id: 6, message: state.newMessageBody, position: 'right'}],
              newMessageBody: '',
            };
        }
        default: return state;

    }
}

export default dialogReducer;
 
export const selectDialogActionCreator = (id) => {
    return {
      type: SELECT_DIALOG, id: id
    }
  }
  
  export const addNewMessageBodyActionCreator = () => {
    return {
      type: ADD_NEW_MESSAGE_BODY, 
    }
  }
  
  export const updateNewMessageBodyActionCreator = (messageBody) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY, messageBody : messageBody,
    }
  }
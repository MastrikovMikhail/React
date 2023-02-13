import { messageList } from "./message-list";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT_POST = 'UPDATE-NEW-POST-TEXT';
// const SELECT_DIALOG = 'SELECT-DIALOG';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const ADD_NEW_MESSAGE_BODY = 'ADD-NEW-MESSAGE-BODY';

// let messageList = [[
//   {id: 1, message: "Hi", position: "left"},
//   {id: 2, message: "How is your it-camasutra?", position: "right"},
//   {id: 3, message: "Yoo!", position: "left"},
//   {id: 4, message: "Yoo!", position: "right"},
//   {id: 5, message: "Yoo!", position: "left"},
// ],[
//     {id: 1, message: "Hi", position: "left"},
//     {id: 2, message: "I Sanya, and you?", position: "right"},
//     {id: 3, message: "Go to Hui", position: "left"},
//     {id: 4, message: "Yoo!", position: "right"},
//     {id: 5, message: "Yoo!", position: "left"},
//   ]];

let store = {
    _state: {
      profilePage: {
          posts : [
              {id:1 ,message: "Hi, how are you?", likesCount: 15},
              {id:2 ,message: "It's my first post", likesCount: 23},
              {id:3 ,message: "It's my second post", likesCount: 9},
              {id:4 ,message: "It's my therd post", likesCount: 5},
            ],
          newPostText: '',          
      },
  
      dialogsPage: {
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
      },    
  },
  
  _callSubscriber() {
    console.log('ChangeState');
  },

  getState() { 
    return this._state;
  },
  
  getActiveDialogId() {
    return this._state.dialogsPage.activeDialogId;
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;  
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(action, store._state.profilePage);
    this._state.dialogsPage = dialogReducer(action, store._state.dialogsPage);
    this._callSubscriber(this._state);
    // if (action.type === ADD_POST) { 
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   }
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = '';
    //   this._callSubscriber(this._state);

    // } else if (action.type === UPDATE_NEW_POST_TEXT_POST ) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);

    // } else if (action.type === SELECT_DIALOG) {
    //   this._state.dialogsPage.activeDialogId = action.id;
    //   this._state.dialogsPage.messages = messageList[action.id];
    //   this._callSubscriber(this._state);
    
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogsPage.newMessageBody = action.messageBody;
    //   this._callSubscriber(this._state);
    
    // } else if (action.type === ADD_NEW_MESSAGE_BODY) {
    //   //this._state.dialogsPage.messages.push({id: 6, message: this._state.dialogsPage.newMessageBody, position: 'right'});
    //   messageList[this.getActiveDialogId()].push({id: 6, message: this._state.dialogsPage.newMessageBody, position: 'right'});
    //   this._state.dialogsPage.newMessageBody = '';
    //   this._callSubscriber(this._state); 
    // }
  }
}

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   }
// }

// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT_POST, newText: text
//   }
// }

// export const selectDialogActionCreator = (id) => {
//   return {
//     type: SELECT_DIALOG, id: id
//   }
// }

// export const addNewMessageBodyActionCreator = () => {
//   return {
//     type: ADD_NEW_MESSAGE_BODY, 
//   }
// }

// export const updateNewMessageBodyActionCreator = (messageBody) => {
//   return {
//     type: UPDATE_NEW_MESSAGE_BODY, messageBody : messageBody,
//   }
// }

export default store;
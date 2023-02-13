let store = {
    _messageList: [[
      {id: 1, message: "Hi", position: "left"},
      {id: 2, message: "How is your it-camasutra?", position: "right"},
      {id: 3, message: "Yoo!", position: "left"},
      {id: 4, message: "Yoo!", position: "right"},
      {id: 5, message: "Yoo!", position: "left"},
    ],[
        {id: 1, message: "Hi", position: "left"},
        {id: 2, message: "I Sanya, and you?", position: "right"},
        {id: 3, message: "Go to Hui", position: "left"},
        {id: 4, message: "Yoo!", position: "right"},
        {id: 5, message: "Yoo!", position: "left"},
      ]],
  
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
            messages: this._messageList[0],    
        },    
    },
    
    getState() { 
      console.log('Рисую');
      return this._state;
    },
    addPost() {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.posts.push(newPost);
      this.rerenderEntireTree(this._state);
      this.updatePostText('');
    },
    
    updatePostText(text) {
      this._state.profilePage.newPostText = text;
      this.rerenderEntireTree(this._state);
    },
  
    changeActiveDialog(id) {
      this._state.dialogsPage.messages = this._messageList[id];
      this.rerenderEntireTree(this._state);
    }, 
    
    rerenderEntireTree() {
      console.log('ChangeState');
    },
  
    subscribe(observer) {
      debugger;
      this.rerenderEntireTree = observer;  
    }
  
  }
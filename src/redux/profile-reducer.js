const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_POST = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id:1 ,message: "Hi, how are you?", likesCount: 15},
        {id:2 ,message: "It's my first post", likesCount: 23},
        {id:3 ,message: "It's my second post", likesCount: 9},
        {id:4 ,message: "It's my therd post", likesCount: 5},
      ],
    newPostText: '',     

}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
              id: 5,
              message: state.newPostText,
              likesCount: 0,
            }
            return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: '',

            };
          }
        case UPDATE_NEW_POST_TEXT_POST: {
            return {
              ...state,
              newPostText: action.newText,
            };
        }
        default: return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT_POST, newText: text
    }
  }
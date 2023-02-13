import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

// const MyPostsContainer = (props) => {
//     return (
//       <StoreContext.Consumer>
//         { (store) => { 

//               let state = store.getState();

//               let addPost = () => {
//                 let action = addPostActionCreator();
//                 store.dispatch(action) 
//               }

//               let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);
//               }

//         return <MyPosts updateNewPostText = {onPostChange} 
//                     addPost = {addPost}   
//                     posts = {state.profilePage.posts}
//                     newPostText = {state.profilePage.newPostText}/>}
//         }
//       </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
  return {
    posts : state.profilePage.posts,
    newPostText :  state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost : () => {
      let action = addPostActionCreator();
      dispatch(action) 
    },
    updateNewPostText : (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
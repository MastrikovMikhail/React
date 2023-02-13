import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyActionCreator, addNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyActionCreator(text));
    },
    addNewMessageBody: () => {
      dispatch(addNewMessageBodyActionCreator());
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
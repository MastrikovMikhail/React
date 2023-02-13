import React from "react";
import s from  './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { NavLink } from "react-router-dom";
import { updateNewMessageBodyActionCreator, addNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} position={m.position} key={m.id}/>);

let onUpdateNewMessageBody = (e) => {
  props.updateNewMessageBody(e.target.value);
}

let onAddNewMessageBody = () => {
  props.addNewMessageBody();
}


    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            { dialogsElement }
          </div>
          <div className={s.messages}>
            { messagesElements }    
            <div>
              <textarea onChange={onUpdateNewMessageBody} value={props.dialogsPage.newMessageBody}></textarea>
            </div>
            <div>
              <button onClick={onAddNewMessageBody}>Отправить</button>
            </div>
          </div>
      </div>
    ) 
}

export default Dialogs;
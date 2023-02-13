import React from "react";
import s from  './DialogItem.module.css'
import { NavLink } from "react-router-dom";
import { selectDialogActionCreator } from "../../../redux/dialogs-reducer";

const DialogItem = (props) => {

  let change = (e) => {
    let action = selectDialogActionCreator(e.turget.id);
    //props.dispatch(action);
  }

  return (
    <div className={s.dialog + ' ' + s.active}> 
     <NavLink onClick={change} id={props.id} to={"/dialogs/" + props.id} className={({ isActive }) => (isActive ? s.active : s.link)}>{props.name}</NavLink>
    </div>
  ) 
}

export default DialogItem;
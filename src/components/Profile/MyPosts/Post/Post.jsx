import React from "react";
import s from  './Post.module.css'

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src="https://rg.ru/uploads/images/2022/11/02/ovot_cf9.jpg" alt="" />
         {props.message}
         <div>
          <span>{props.likesCount}</span>
         </div>        
      </div>

)}

export default Post;
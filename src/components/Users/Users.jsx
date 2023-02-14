import React from "react";
import s from  './Users.module.css'

const Users = (props) => {
    debugger;
    if (props.users.length === 0) {
    props.setUsers([
            {id: 1, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: true, fullname: 'Sasha', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: true, fullname: 'Vova', status: 'I am boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: false, fullname: 'Petya', status: 'I am loh', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 4, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: false, fullname: 'Nursultan', status: 'I am pidor', location: {city: 'Astana', country: 'Kazahstan'}},
        ])
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="" className={s.userPhoto} />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button> } 
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
            
        </div>

)}

export default Users;
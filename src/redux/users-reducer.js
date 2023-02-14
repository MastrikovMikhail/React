const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
     users: [
    //     {id: 1, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: true, fullname: 'Sasha', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
    //     {id: 2, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: true, fullname: 'Vova', status: 'I am boss too', location: {city: 'Moscow', country: 'Russia'}},
    //     {id: 3, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: false, fullname: 'Petya', status: 'I am loh', location: {city: 'Kiev', country: 'Ukraine'}},
    //     {id: 4, photoUrl: 'https://avatars.mds.yandex.net/i?id=22c74f6d2d601cab28de6d99236cfbccffc17b9a-7755611-images-thumbs&n=13', followed: false, fullname: 'Nursultan', status: 'I am pidor', location: {city: 'Astana', country: 'Kazahstan'}},
     ]

}


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: 
            return {
                users: {...state, users: [...state.users, ...action.users]}
            }
        default: 
            return state;
    }

}

export default usersReducer;

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
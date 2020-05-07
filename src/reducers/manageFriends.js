export function manageFriends(state={friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            let newFriendArr = [...state.friends, action.friend]
            return {
                ...state,
                friends: newFriendArr
            };
        case "REMOVE_FRIEND":
            let defriendArr = [...state.friends].filter(friend => friend.id !== action.id)
            return {
                ...state,
                friends: defriendArr
            };
        default: 
            return state;
    }
}

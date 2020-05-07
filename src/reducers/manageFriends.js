export function manageFriends(state = {friends: []}, action){
    let retVal = {}
    switch(action.type)
    {
        case 'ADD_FRIEND':
            retVal = {friends: [...state.friends,action.friend]}
        break;

        case 'REMOVE_FRIEND':
            retVal = {friends: [...state.friends].filter(friend=>(friend.id !==action.id))}
        break;
        
        default:
            retVal = state
        break;
    }
    return retVal;
}

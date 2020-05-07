export function managePresents(state = { numberOfPresents: 0}, action){
    let retVal = {}
    switch(action.type)
    {
        case 'INCREASE':
        retVal = {numberOfPresents: state.numberOfPresents+1};
        break;

        default:
        // retVal = {numberOfPresents: state.numberOfPresents}
        retVal = state;
        break;
    }
    return retVal;
}

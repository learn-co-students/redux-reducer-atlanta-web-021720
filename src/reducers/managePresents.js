export function managePresents(state={numberOfPresents: 0}, action){
    switch(action.type) {
        case "INCREASE":
            return {numberOfPresents: state.numberofPresents + 1}
            default: state
    }
}

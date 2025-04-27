const initState = {
    tasks: [],
}

export function taskReducer(state = initState, action) {
    switch(action.type) {
        case "LOAD_TASKS":
            return { ...state, tasks: action.payload }
        case "CREATE_TASK":
            return { ...state, tasks: action.payload }
        case "DELETE_TASK":
            return { ...state, tasks: action.payload }
        case "UPDATE_TASK":
            return { ...state, tasks: action.payload }
        default:
            return state;
    }
}


const initialState = {
    coins: [],
    user: false,
    history: []
}
const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return { ...state, coins: action.payload }
        case 'USER_LOGIN':
            return { ...state, user: action.payload }
        case 'USER_LOGOUT':
            return { ...state, user: false }
        case 'HISTORY_LOADED':
            let story = [...state.history];
            const status = story.find(item => item.id === action.payload.id)
            if (!status) {
                story.push(action.payload)
                return { ...state, history: story.slice(-5) }
            }
            return state
        default:
            return state;
    }
}
export default reduser;
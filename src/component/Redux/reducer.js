const initialState = {
    coins: [],
    user: false,
}
const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return { ...state, coins: action.payload }
        case 'USER_LOGIN':
            return { ...state, user: action.payload }
        default:
            return state;
    }
}
export default reduser;
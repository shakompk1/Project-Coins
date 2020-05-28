const initialState = {
    coins: [],
    user: false,
    history: [],
    stock: []
}
const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return { ...state, coins: action.payload };
        case 'USER_LOGIN':
            return { ...state, user: action.payload };
        case 'USER_LOGOUT':
            return { ...state, user: false };
        case 'BUY_STOCK':
            let buyStock = [...state.stock];
            return { ...state, stock: buyStock.filter(item => item.id !== action.payload) };
        case 'DELETE_STOCK':
            let deleteStock = [...state.stock];
            return { ...state, stock: deleteStock.filter(item => item.id !== action.payload) };
        case 'ADD_STOCK':
            let addStock = [...state.stock];
            const addStockStatus = addStock.find(item => item.id === action.payload.id);
            if (!addStockStatus) {
                addStock.push(action.payload);
                return { ...state, stock: addStock };
            }
            return state;
        case 'HISTORY_LOADED':
            let story = [...state.history];
            const status = story.find(item => item.id === action.payload.id);
            if (!status) {
                if (action.payload.length >= 0) {
                    for (let i = 0; i < action.payload.length; i++) {
                        story.push(action.payload[i])
                    }
                } else {
                    story.push(action.payload)
                }
                window.localStorage.removeItem('watchStory')
                window.localStorage.setItem('watchStory', JSON.stringify(story.slice(-20)));
                const newStory = { ...state, history: story.slice(-20) }
                return newStory
            }
            return state;
        default:
            return state;
    }
}
export default reduser;
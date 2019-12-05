const initialState = {
    columns: [
        
    ],
    newCardText: null
};

function trello(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                columns: action.columns
            }
        case 'ADD_NEW_CARD_TEXT':
            return {
                ...state,
                newCardText: action.payload
            }
        case 'ADD_CARD':
            return {
                ...state,
                columns: action.columns,
                newCardText: action.newCardText
            }
        case 'DELETE_CARD':
            return {
                ...state,
                columns: action.columns
            }
        case 'ADD_COLUMN':
            return {
                ...state,
                columns: action.columns
            }
        case 'DELETE_COLUMN':
            return {
                ...state,
                columns: action.columns
            }
        case 'EDIT_CARD':
            return {
                ...state,
                columns: action.columns
            }
        default:
            return state;
    }
}

export default trello;

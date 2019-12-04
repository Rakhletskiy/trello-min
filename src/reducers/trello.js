const initialState = {
    columns: [
        {
            id: 1,
            title: "Work",
            cards: ["Code new Facebook", "Make cool service"]
        },
        {
            id: 2,
            title: "Home",
            cards: ["Consumables", "Cake"]
        }
    ],
    newCardText: null
};

function trello(state = initialState, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}

export default trello;

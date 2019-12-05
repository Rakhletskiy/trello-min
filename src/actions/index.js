export const fetchData = () => dispatch => {
    const columns = localStorage.getItem('columns');
    return dispatch({
        type: 'FETCH_DATA',
        columns: JSON.parse(columns)
    });
};

export const addNewCardText = text => dispatch => dispatch({ type: 'ADD_NEW_CARD_TEXT', payload: text });

export const onAddCard = (newCardText, colIndex) => (dispatch, getState) => {
    const state = getState();

    // copy current column obj
    let updateColumn = state.columns[colIndex];
    let newCards = updateColumn.cards;

    // push new card to cards array
    if (newCardText !== '' && newCardText !== null) {
        newCards.push(newCardText);
    }

    updateColumn.cards = newCards;

    // delete current column and replace it with updating column
    const newColumns = [...state.columns];
    newColumns.splice(colIndex, 1, updateColumn);

    localStorage.setItem('columns', JSON.stringify(newColumns));

    return dispatch({
        type: 'ADD_CARD',
        columns: newColumns,
        newCardText: ''
    });
};

export const onDelCard = (colIndex, cardIndex) => (dispatch, getState) => {
    const state = getState();

    // copy current column obj
    let updateColumn = state.columns[colIndex];

    // delete clicked card
    updateColumn.cards.splice(cardIndex, 1);

    // delete current column and replace it with updating column
    const newColumns = [...state.columns];
    newColumns.splice(colIndex, 1, updateColumn);

    localStorage.setItem('columns', JSON.stringify(newColumns));

    return dispatch({
        type: 'DELETE_CARD',
        columns: newColumns
    });
};

export const onAddCol = (colTitle, setIsAdding) => (dispatch, getState) => {
    const state = getState();

    setIsAdding(false);

    // copy columns array
    if (state.columns !== null) {
        var newColumns = [...state.columns];
    } else {
        var newColumns = [];
    }

    // get last id and make incr
    if (!newColumns) {
        var id = newColumns[newColumns.length - 1].id;
    } else {
        var id = 1;
    }

    // console.log(id)

    // push new column in temporary array
    newColumns.push({ id: id + 1, title: colTitle, cards: [] });

    localStorage.setItem('columns', JSON.stringify(newColumns));

    return dispatch({
        type: 'ADD_COLUMN',
        columns: newColumns
    });
};

export const onDelCol = colIndex => (dispatch, getState) => {
    const state = getState();

    // copy current columns array
    let newColumns = [...state.columns];

    // delete clicked column
    newColumns.splice(colIndex, 1);

    localStorage.setItem('columns', JSON.stringify(newColumns));

    return dispatch({
        type: 'DELETE_COLUMN',
        columns: newColumns
    });
};

export const setNewCardText = (text, colIndex, cardIndex) => (dispatch, getState) => {
    const state = getState();

    // copy current columns array
    let newColumns = [...state.columns];

    // rewrite card item
    newColumns[colIndex].cards[cardIndex] = text;

    // update localstorage
    localStorage.setItem('columns', JSON.stringify(newColumns));

    return dispatch({
        type: 'EDIT_CARD',
        columns: newColumns
    })


}


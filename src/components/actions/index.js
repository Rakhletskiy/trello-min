export const onAddCard = (newCardText, colIndex) => (dispatch, getState) => {
    const state = getState();

    // copy current column obj
    let updateColumn = state.columns[colIndex];

    // push new card to cards array
    if (newCardText !== '' && newCardText !== null) {
        updateColumn.cards.push(newCardText);
    }

    // delete current column and replace it with updating column
    const newColumns = [...state.columns];
    newColumns.splice(colIndex, 1, updateColumn);

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

    return dispatch({
        type: 'DELETE_CARD',
        columns: newColumns
    });
};

export const onAddCol = colTitle => (dispatch, getState) => {
    const state = getState();

    // copy columns array
    let newColumns = [...state.columns];

    // get last id and make incr
    const id = newColumns[newColumns.length - 1].id;
    // console.log(id)

    // push new column in temporary array
    newColumns.push({id: id + 1, title: colTitle, cards: []});

    return dispatch({
        type: 'ADD_COLUMN',
        columns: newColumns
    })

}

export const onDelCol = colIndex => (dispatch, getState) => {
    const state = getState();

    // copy current columns array
    let newColumns = [...state.columns];
    
    // delete clicked column
    newColumns.splice(colIndex, 1);

    return dispatch({
        type: 'DELETE_COLUMN',
        columns: newColumns
    })
}


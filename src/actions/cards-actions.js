import reorderCardsHelper from '../helpers/reorderCards';

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

  // set updated columns to local storage
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
  });
};

export const reorderCards = ({ source, destination }) => (dispatch, getState) => {
  const state = getState();

  // get reordered columns array
  const newColumns = reorderCardsHelper({
    state: state.columns,
    source,
    destination
  });

  // set to the storage
  localStorage.setItem('columns', JSON.stringify(newColumns));

  return dispatch({
    type: 'REORDER_CARDS',
    columns: newColumns
  });
};
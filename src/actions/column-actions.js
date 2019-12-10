export const setInitialColumns = () => dispatch => {
  // define initial columns
  const initialColumns = [
    { title: 'Example column 1', cards: ['example card 1.1 (draggable)', 'example card 1.2 (draggable)'] },
    { title: 'Example column 2', cards: ['example card 2.1 (draggable)'] }
  ];

  // get current columns for check
  const currColumns = localStorage.getItem('columns');

  if (currColumns == null) {
    // set initial columns in localStorage
    localStorage.setItem('columns', JSON.stringify(initialColumns));

    // set initial columns in redux
    return dispatch({
      type: 'SET_INITIAL_COLUMNS',
      columns: initialColumns
    });
  }
};

export const fetchData = () => dispatch => {
  const columns = localStorage.getItem('columns');
  return dispatch({
    type: 'FETCH_DATA',
    columns: JSON.parse(columns)
  });
};

export const onAddCol = (colTitle, setIsAdding) => (dispatch, getState) => {
  const state = getState();

  setIsAdding(false);

  // copy columns array
  let newColumns;
  state.columns !== null ? newColumns = [...state.columns] : newColumns = [];

  // push new column in temporary array
  colTitle !== '' && colTitle !== null ? newColumns.push({ title: colTitle, cards: [] }) : alert('Set column name please');

  // set new columns array to local storage
  localStorage.setItem('columns', JSON.stringify(newColumns));

  return dispatch({
    type: 'ADD_COLUMN',
    columns: newColumns,
    newCardText: ''
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

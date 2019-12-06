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
  var newColumns;

  if (state.columns !== null) {
    newColumns = [...state.columns];
  } else {
    newColumns = [];
  }

  // push new column in temporary array
  newColumns.push({ title: colTitle, cards: [] });

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



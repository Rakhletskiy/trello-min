import { createStore, applyMiddleware } from 'redux';
import trello from './reducers/trello';
import thunk from 'redux-thunk';

const store = createStore(trello, applyMiddleware(thunk));

export default store;
import { createStore } from 'redux';
import trello from './reducers/trello';

const store = createStore(trello);

export default store;
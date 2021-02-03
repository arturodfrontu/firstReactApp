import { combineReducers, createStore } from 'redux';
import initialStoreData from '../data/dataStore';
import columnsReducer from '../redux/columnsRedux.js';
import cardsReducer from '../redux/cardsRedux.js';

const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
};

const reducers = {
  columns: columnsReducer,
  cards: cardsReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const storeReducer = combineReducers(reducers);

const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

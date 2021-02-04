import { combineReducers, createStore } from 'redux';
import initialStoreData from '../data/dataStore.js';
import columnsReducer from '../redux/columnsRedux.js';
import cardsReducer from '../redux/cardsRedux.js';
import searchStringReducer from '../redux/searchStringRedux.js';

const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: '',
};

const reducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
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

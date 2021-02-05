import shortid from 'shortid';

export const getSearchString = state => state.searchString;
export const countAllCards = ({ cards }) => cards.lenght;
export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).lenght;

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_SEARCH = createActionName('CHANGE_SEARCH');

export const createActionChangeSearch = payload => ({payload: payload, id: shortid.generate(), type: CHANGE_SEARCH });

export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.payload;
    default:
      return statePart;
  }
}


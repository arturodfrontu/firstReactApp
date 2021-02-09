import {connect} from 'react-redux';
import SearchResult from './SearchResults.js';
import {getCardsForAllListSearchingResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  return {
    cards: getCardsForAllListSearchingResults(state, props),
  };
};

export default connect(mapStateToProps)(SearchResult);
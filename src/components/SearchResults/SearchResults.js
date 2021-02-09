import React from 'react';
import styles from './SerchResults.scss';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {

static propTypes = {
  cards: PropTypes.array,
  title: PropTypes.string,
}

render(){
  const { cards } = this.props;

  return (

    <Container>
      <section className={styles.component}>
        <div className={styles.cards}>{cards.map(cardData => (
          <div key={cardData.id} className={styles.wrapper}>
            { console.log('searchresult',cards) }
            <Card key={cardData.id} {...cardData} />
            <Link className={styles.link} to={`/list/${cardData.listId}`}>
              <p>Go to the list</p>
            </Link>
          </div>
        ))}
        </div>
      </section >
    </Container>
  );
}

}

export default SearchResults;

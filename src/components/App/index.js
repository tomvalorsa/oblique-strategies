// @flow
import * as React from 'react';
import styles from './index.module.scss';
import Deck from '../Deck';
import { Strategies } from '../../const';
import { Strategy } from '../../types';
import shuffle from 'lodash.shuffle';

/*
  TODO:
  - css border bug for card
  - clean everything up
  - write readme with license (unlicense?)
  - favicon
  - cross browser compat
*/

type State = {
  cards: Strategy[],
  selected?: Strategy
};

class App extends React.Component<{}, State> {
  state = {
    cards: shuffle(Strategies),
    selected: null
  };

  drawCard = () => {
    const [selected, ...remaining] = this.state.cards;
    this.setState({ cards: remaining, selected });
  };

  restart = () => {
    this.setState({
      cards: shuffle(Strategies),
      selected: null
    });
  };

  render() {
    const { cards, selected } = this.state;

    return (
      <div className={styles.app}>
        <Deck cards={cards} selected={selected} />

        {cards.length > 0 ? (
          <button className={styles.button} onClick={this.drawCard}>
            DRAW A CARD
          </button>
        ) : (
          <button className={styles.button} onClick={this.restart}>
            RESTART
          </button>
        )}
      </div>
    );
  }
}

export default App;

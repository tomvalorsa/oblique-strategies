// @flow
import * as React from 'react';
import styles from './index.module.scss';
import Deck from '../Deck';
import { Strategies } from '../../const';
import { Strategy } from '../../types';

/*
  TODO:
  - source some data
    - look at creating a programming version in the future?
  - shuffle initially
    - use the fisher yates shuffle, write it out myself, tests
  - pop off the array one by one (i.e. so we don't get duplicates when drawing)
    - write test so that once it's out there, it's no longer in array
  - when empty, reshuffle option
  - add in animations after
  - how do cards work?
    - will need stack of cards, then an active/selected card
    - render them all at once
    - then when card is selected/drawn, render an active card on top of stack
    - this will start off like normal item in the stack, but will be animated out

  stack of cards (i.e. render something for each)
    - not specifically tied to each card
    - just one thing per card

  card is drawn
    - top card becomes 'focus' or 'selected'
    - this is taken off the pile
    - show in center of screen

  card is dismissed
    - back to stack of cards, now with one less

  state:
  - strategies
    - initial state: a shuffled array
    - updates: one less record each time, 'pop' one off (without mutating)
  - selected
    - initial state: null
    - updates: receives the 'popped' strategy
  
*/

type State = {
  cards: Strategy[],
  selected?: Strategy
};

class App extends React.Component<{}, State> {
  state = {
    cards: Strategies,
    selected: null
  };

  drawCard = () => {
    const [selected, ...remaining] = this.state.cards;
    this.setState({ cards: remaining, selected });
  };

  render() {
    const { cards, selected } = this.state;

    return (
      <div className={styles.app}>
        <Deck cards={cards} selected={selected} />

        <button className={styles.drawCard} onClick={this.drawCard}>
          Draw a card
        </button>
      </div>
    );
  }
}

export default App;

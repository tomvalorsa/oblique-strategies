// @flow
import * as React from 'react';
import cls from 'classnames';
import styles from './index.module.scss';
import { Strategy } from '../../types';

type Props = {
  cards: Strategy[],
  selected: Strategy
};

class Deck extends React.Component<Props> {
  render() {
    const { cards, selected } = this.props;

    console.log(cards, selected);

    return (
      <div className={styles.deck}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={styles.card}
            style={{
              bottom: i * 2,
              zIndex: i + 1
            }}
          >
            <div className={styles.back}>
              <div className={styles.front}>{card.text}</div>
            </div>
          </div>
        ))}
        {selected && (
          <div
            key={selected.id}
            className={cls(styles.card, styles.selected)}
            style={{
              bottom: cards.length * 2,
              zIndex: cards.length
            }}
          >
            <div className={styles.back}>
              <div className={styles.front}>{selected.text}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Deck;

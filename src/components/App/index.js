// @flow
import * as React from 'react';
import styles from './index.module.scss';
import Card from '../Card';
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
*/

type State = {
  strategies: Strategy[]
};

class App extends React.Component<{}, State> {
  state = {
    strategies: Strategies
  };

  render() {
    const { strategies } = this.state;

    return (
      <div className={styles.app}>
        {strategies.map(strategy => (
          <Card key={strategy.id}>{strategy.text}</Card>
        ))}
      </div>
    );
  }
}

export default App;

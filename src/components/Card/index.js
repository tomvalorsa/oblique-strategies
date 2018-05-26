// @flow
import * as React from 'react';
import styles from './index.module.scss';

type Props = {
  children: React.Node
};

class Card extends React.Component<Props> {
  render() {
    return <div className={styles.card}>{this.props.children}</div>;
  }
}

export default Card;

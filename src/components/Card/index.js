// @flow
import * as React from 'react';
import styles from './index.module.scss';

type Props = {
  children: React.Node
};

class Card extends React.Component<Props> {
  render() {
    const { children } = this.props;
    return <div className={styles.card}>{children}</div>;
  }
}

export default Card;

import React, { PropTypes } from 'react';

import styles from './Single.css';
import Header from '../../components/Header';

import prismes from '../../constants';

console.log(prismes[0][0]);

const Single = ({ location: { query: { article, prisme } } }) => (
  <div className={styles.single}>
    <Header pathname={`/prisme/${prisme}`} options />
    <div
      className={styles.image}
      style={{ backgroundImage: `url('${prismes[prisme][article].img}')` }}
    />
    <div className={styles.content}>
      <div className={styles.triangle} />
      <div className={styles.text}>
        <small>#{prismes[prisme][article].category}</small>
        <h2>{prismes[prisme][article].title}</h2>
        <p>{prismes[prisme][article].content}</p>
      </div>
    </div>
  </div>
);

Single.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Single;

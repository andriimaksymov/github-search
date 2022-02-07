import React, { memo } from 'react';
import { IRepoData } from '../../types';
import styles from './RepoItem.module.scss';

const RepoItem: React.FC<IRepoData> = ({ full_name, forks, stargazers_count }) => {
  return (
    <div className={styles.root}>
      <h3>{full_name}</h3>
      <div className={styles.footnote}>
        <p>Forks: {forks}</p>
        <p>Stars: {stargazers_count}</p>
      </div>
    </div>
  )
};

export default memo(RepoItem);
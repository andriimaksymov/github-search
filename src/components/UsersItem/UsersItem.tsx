import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './UsersItem.module.scss';
import { IUserData } from '../../types';

const UsersItem: React.FC<IUserData> = ({ login, avatar_url, name }) => {
  const [reposCount, setReposCount] = useState<number>(0);

  useEffect(() => {
    if (login) {
      fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(repos => setReposCount(repos.public_repos))
    }
  }, [login])

  return (
    <Link to={`/profile/${login}`} className={styles.root}>
      <div>
        <img width={40} height={40} src={avatar_url} alt={name} />
      </div>
      <h3>{name}</h3>
      <span>Repo: {reposCount}</span>
    </Link>
  )
};

export default memo(UsersItem);
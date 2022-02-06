import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './UsersItem.module.scss';
import { IUserData } from '../../types';

const UsersItem: React.FC<IUserData> = ({ login, avatar_url, name, repos_url }) => {
  return (
    <Link to={`/profile/${login}`} className={styles.root}>
      <div>
        <img width={40} height={40} src={avatar_url} alt={name} />
      </div>
      <h3>{name}</h3>
      <span>{repos_url}</span>
    </Link>
  )
};

export default memo(UsersItem);
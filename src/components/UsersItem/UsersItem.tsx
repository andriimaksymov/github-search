import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './UsersItem.module.scss';
import { IUserData } from '../../types';

const UsersItem: React.FC<IUserData> = ({ login, avatar, name, repository }) => {
  return (
    <Link to={`/profile/${login}`} className={styles.root}>
      <div>
        <img width={40} height={40} src={avatar} alt={name} />
      </div>
      <h3>{name}</h3>
      <span>{repository}</span>
    </Link>
  )
};

export default memo(UsersItem);
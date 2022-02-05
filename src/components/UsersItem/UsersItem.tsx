import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './UsersItem.module.scss';

interface Props {
  id: string,
  avatar: string,
  name: string
  repository: string,
}

const UsersItem: React.FC<Props> = ({ id = '', avatar, name, repository }) => {
  return (
    <Link to={`/profile/${id}`} className={styles.root}>
      <div>
        <img width={40} height={40} src={avatar} alt={name} />
      </div>
      <h3>{name}</h3>
      <span>{repository}</span>
    </Link>
  )
};

export default memo(UsersItem);
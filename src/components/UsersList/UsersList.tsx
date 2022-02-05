import React, { memo } from 'react';
import UsersItem from '../UsersItem/UsersItem';
import styles from './UserList.module.scss';

interface Props {
  data: {
    items: string[],
  },
}

const UsersList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      {
        data.items.map((i: any) =>
          <UsersItem
            id={i.id}
            key={i.id}
            name={i.login}
            avatar={i.avatar_url}
            repository={i.repos_url}
          />
        )
      }
    </div>
  )
};

export default memo(UsersList);
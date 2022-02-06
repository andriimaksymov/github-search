import React, { useContext } from 'react';
import UsersItem from '../UsersItem/UsersItem';
import AppContext from '../../AppContext';
import styles from './UserList.module.scss';

const UsersList: React.FC = () => {
  const { users } = useContext(AppContext);

  return (
    <div className={styles.container}>
      {
        users.items && users.items.map((i: any) =>
          <UsersItem
            key={i.login}
            login={i.login}
            name={i.login}
            avatar_url={i.avatar_url}
            repos_url={i.repos_url}
          />
        )
      }
    </div>
  )
};

export default UsersList;
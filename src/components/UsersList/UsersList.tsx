import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import { IUserData } from '../../types';
import UsersItem from '../UsersItem/UsersItem';
import styles from './UserList.module.scss';

const UsersList: React.FC = () => {
  const { users } = useContext(AppContext);

  return (
    <div className={styles.container}>
      {
        users.items && users.items.map((i: IUserData) =>
          <UsersItem
            key={i.login}
            login={i.login}
            name={i.login}
            avatar_url={i.avatar_url}
          />
        )
      }
    </div>
  )
};

export default UsersList;
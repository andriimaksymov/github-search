import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UsersItem from '../UsersItem/UsersItem';
import AppContext from '../../AppContext';
import styles from './UserList.module.scss';

const UsersList: React.FC = () => {
  const search = new URLSearchParams(useLocation().search);
  const query = search.get("query");

  const { users, setUsers } = useContext(AppContext);

  useEffect(() => {
    if (!users?.items?.length) {
      if (query) {
        fetch(`https://api.github.com/search/users?q=${query}`)
          .then(res => res.json())
          .then(data => {
            if (data.errors) {
              throw new Error(data.errors)
            } else {
              if (setUsers) {
                setUsers(data)
              }
            }
          });
      }
    }
  }, [query]);

  return (
    <div className={styles.container}>
      {
        users.items && users.items.map((i: any) =>
          <UsersItem
            key={i.login}
            login={i.login}
            name={i.login}
            avatar={i.avatar_url}
            repository={i.repos_url}
          />
        )
      }
    </div>
  )
};

export default UsersList;
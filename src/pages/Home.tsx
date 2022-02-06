import { FC, useContext } from 'react';
import Search from '../components/Search/Search';
import UsersList from '../components/UsersList/UsersList';
import AppContext from '../AppContext';

const Home: FC = () => {
  const { setUsers } = useContext(AppContext);

  const handleFetchUsers = (query: string) => {
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          throw new Error(data.errors);
        } else {
          if (setUsers) {
            setUsers(data);
          }
        }
      });
  }
  return (
    <main>
      <h1 className="text-center">Search Github users</h1>
      <Search onSearch={handleFetchUsers} />
      <UsersList />
    </main>
  )
}

export default Home;
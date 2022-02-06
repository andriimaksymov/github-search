import * as React from 'react'
import Search from '../components/Search/Search';
import UsersList from '../components/UsersList/UsersList';

const Home: React.FC = () => {
  return (
    <main>
      <h1 className="text-center">Search Github users</h1>
      <Search />
      <UsersList />
    </main>
  )
}

export default Home;
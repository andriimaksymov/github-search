import * as React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../components/Search/Search';
import UsersList from '../components/UsersList/UsersList';

const Home: React.FC = () => {
  const [data, setData] = useState({ items: [] });
  const search = new URLSearchParams(useLocation().search);
  const query = search.get("query");

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.errors) {
          throw new Error(data.errors)
        } else {
          setData(data)
        }
      });
  }, [query]);

  return (
    <main>
      <h1 className="text-center">Search Github users</h1>
      <Search />
      <UsersList data={data} />
    </main>
  )
}

export default Home;
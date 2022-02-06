import * as React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProfileData } from '../types';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import Search from '../components/Search/Search';

const Profile: React.FC = () => {
  const { login } = useParams();
  const [data, setData] = useState<Partial<IProfileData>>({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        fetch(data.repos_url)
          .then(res => res.json())
          .then(data => {
            setRepos(data);
          })
      })
  }, [login]);

  const handleGetUserRepo = (query: string) => {
    console.log(query)
  }

  return (
    <main>
      <ProfileInfo {...data} />
      <Search placeholder="Repository..." onSearch={handleGetUserRepo} />
    </main>
  )
}

export default Profile;
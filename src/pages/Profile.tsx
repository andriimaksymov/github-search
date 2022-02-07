import * as React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProfileData, IRepoData } from '../types';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import RepoItem from '../components/RepoItem/RepoItem';
import Search from '../components/Search/Search';

const Profile: React.FC = () => {
  const { login } = useParams();
  const [data, setData] = useState<Partial<IProfileData>>({});
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        fetch(data.repos_url)
          .then(res => res.json())
          .then(data => {
            setRepos(data);
            setFilteredRepos(data);
          })
      })
  }, [login]);

  const handleGetUserRepo = (query: string) => {
    setFilteredRepos(repos.filter((i: any) => i.full_name.includes(query)));
  }

  return (
    <main>
      <ProfileInfo {...data} />
      <Search placeholder="Repository..." onSearch={handleGetUserRepo} />
      {
        filteredRepos.map((i: IRepoData) => (
          <RepoItem
            key={i.full_name}
            forks={i.forks}
            full_name={i.full_name}
            stargazers_count={i.stargazers_count}
          />
        ))
      }
    </main>
  )
}

export default Profile;
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import AppContext from './AppContext';
import { useState } from 'react';
import { IUsers } from './types';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUsers>({});
  return (
    <AppContext.Provider value={{
      users,
      setUsers,
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:login" element={<Profile />} />
      </Routes>
    </AppContext.Provider>
  )
};

export default App;
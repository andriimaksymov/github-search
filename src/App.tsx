import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/profile" element={Profile} />
    </Routes>
  )
};

export default App;
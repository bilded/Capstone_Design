// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './JS/LoginPage';
import MainPage from './JS/MainPage';
import Create_Team from './JS/Create_Team';
import TeamList from './JS/Team_List';
import MyPage from './JS/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/create_team" element={<Create_Team />} />
        <Route path="/team_list" element={<TeamList />} />
        <Route path="/mypage" element={<MyPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

// src/MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../env/firebase';

const MainPage = () => {
  const navigate = useNavigate(); // 화면 전환을 위한 useNavigate 훅

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase 로그아웃
      alert("로그아웃 성공!");
      navigate('/'); // 로그아웃 후 LoginPage로 이동
    } catch (error) {
      alert("로그아웃 실패: " + error.message);
    }
  };

  const handleCreateTeam = () => {
    navigate('/create_team');
  };

  const handleTeamList = () => {
    navigate('/team_list');
  };

  const handleMyPage = () => {
    navigate('/mypage');
  };

  return (
    <div>
      <h1>메인 페이지</h1>
      <p>로그인 성공 후 이 페이지에 왔습니다.</p>
      <button onClick={handleLogout}>로그아웃</button>
      <button onClick={handleCreateTeam}>팀 만들기</button>
      <button onClick={handleTeamList}>팀 리스트</button>
      <button onClick={handleMyPage}>마이 페이지</button>
    </div>
  );
};

export default MainPage;

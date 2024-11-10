import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  // 페이지 로드 시 팀 목록을 불러옴
  useEffect(() => {
    axios.get('http://localhost:5000/api/teams')
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the teams!', error);
      });
  }, []);

  return (
    <div>
      <h1>Team List</h1>
      <ul>
        {teams.length > 0 ? (
          teams.map((team, index) => (
            <li key={index}>
              <h2>{team.title}</h2>
              <p>{team.description}</p>
            </li>
          ))
        ) : (
          <p>생성된 팀이 없습니다.</p>
        )}
      </ul>
      <button onClick={() => navigate('/create_team')}>팀 만들기</button>
      <button onClick={() => navigate('/mainpage')}>메인 페이지로 돌아가기</button>
    </div>
  );
}

export default TeamList;
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create_Team = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleCreateTeam = () => {
        console.log("Button clicked");
        const newTeam = { title, description };
        axios.post('http://localhost:5000/api/teams', newTeam)
            .then(response => {
                console.log('Team created:', response.data);
                navigate('/team_list');
            })
            .catch(error => {
                console.error('There was an error creating the team!', error);
            });
    };

    const handleMainPage = () => {
        navigate('/mainpage');
    };

    return (
        <div>
            <h1>팀 만들기 화면</h1>
            <h1>Create a New Team</h1>
            <div>
                <label>제목:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="팀 제목을 입력하세요"
                />
            </div>
            <div>
                <label>내용:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="팀 설명을 입력하세요"
                />
            </div>
            <button onClick={handleCreateTeam}>팀 만들기</button>
            <button onClick={handleMainPage}>메인 페이지로</button>
        </div>
    )
}

export default Create_Team;
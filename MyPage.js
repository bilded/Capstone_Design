import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const [teams, setTeams] = useState([]);
    const [editingTeam, setEditingTeam] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    // 컴포넌트가 로드될 때 팀 목록을 가져옴
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/teams')
            .then(response => {
                setTeams(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the teams!', error);
            });
    }, []);

    // 팀 수정
    const handleEditTeam = (team) => {
        setEditingTeam(team.id);
        setTitle(team.title);
        setDescription(team.description);
    };

    const handleSaveEdit = (id) => {
        axios.put(`http://localhost:5000/api/teams/${id}`, { title, description })
            .then(response => {
                setTeams(teams.map(team => team.id === id ? response.data : team));
                setEditingTeam(null);
                setTitle('');
                setDescription('');
            })
            .catch(error => {
                console.error('There was an error updating the team!', error);
            });
    };

    // 팀 삭제
    const handleDeleteTeam = (id) => {
        axios.delete(`http://localhost:5000/api/teams/${id}`)
            .then(() => {
                setTeams(teams.filter(team => team.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the team!', error);
            });
    };

    return (
        <div>
            <h1>My Page</h1>
            <h2>Your Teams</h2>
            {teams.length > 0 ? (
                teams.map(team => (
                    <div key={team.id}>
                        {editingTeam === team.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Edit title"
                                />
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Edit description"
                                />
                                <button onClick={() => handleSaveEdit(team.id)}>Save</button>
                                <button onClick={() => setEditingTeam(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{team.title}</h3>
                                <p>{team.description}</p>
                                <button onClick={() => handleEditTeam(team)}>Edit</button>
                                <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>You have no teams.</p>
            )}
            <button onClick={() => navigate('/mainpage')}>Back to Main Page</button>
        </div>
    );
};

export default MyPage;

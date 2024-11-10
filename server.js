const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// 서버 시작
app.listen(5000, function(){
    console.log('listening on 5000')    
});

// MongoDB 연결 설정
const mongoURI = 'mongodb://127.0.0.1:27017/teams'; // 로컬 MongoDB 주소, Atlas를 사용할 경우 Atlas URI로 변경
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// 팀 스키마 및 모델 정의
const teamSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Team = mongoose.model('Team', teamSchema);

// POST 요청: 팀 생성
app.post('/api/teams', (req, res) => {
  const { title, description } = req.body;

  const newTeam = new Team({
    title,
    description
  });

  newTeam.save()
    .then(team => res.json(team))
    .catch(err => res.status(500).json({ error: 'Error saving the team' }));
});

// GET 요청: 저장된 팀 목록 불러오기
app.get('/api/teams', (req, res) => {
  Team.find()
    .then(teams => res.json(teams))
    .catch(err => res.status(500).json({ error: 'Error fetching the teams' }));
});


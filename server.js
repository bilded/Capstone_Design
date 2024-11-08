const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://alswl3:<cgwu3fo7eHzEmcf8>@minjik.sotgr.mongodb.net/?retryWrites=true&w=majority&appName=minjik', function(에러, client){
    if (에러) return console.log(에러);
    //서버띄우는 코드 여기로 옮기기
    app.listen('8080', function(){
      console.log('listening on 8080')
    });
})

var db; //    전역변수 db생성
MongoClient.connect('접속URL', { useUnifiedTopology: true }, function (에러, client) {
    //connect()에 추가된 { useUnifiedTopology: true } 속성은 워닝메세지 제거용임. 써주면 깔끔해서 좋음)  
    if (에러) return console.log(에러)
    db = client.db('todoapp'); // client.db('todoapp') : 데이터 베이스에 접속하라!
  
    app.listen(8080, function () {
        console.log('listening on 8080')
    });
});

db.collection('post').insertOne( {이름 : 'John', _id : 100} , function(에러, 결과){
    console.log('저장완료'); 
});
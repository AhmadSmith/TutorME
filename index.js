var express = require('express');
var app = express();

app.use('/static', express.static('static'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/home.html');
});

app.get('/:subject', function(req, res){
  
  var subject = req.params.subject;

  res.sendFile(__dirname + `/subjects/${subject}.html`,function(err){

    if(err) 
      res.status(404).send(`Can't find subject '${subject}'.`);

  });  

});

app.get('/:subject/:topic', function(req, res) {

  var subject = req.params.subject;
  var topic = req.params.topic;

  res.sendFile(__dirname + `/subjects/${subject}/${topic}.html`, function(err){
  
    if(err)
      res.status(404).send(`Can't find topic '${topic}' in subject '${subject}'.`);

  })

});

app.listen(process.env.PORT | 1234, function(){

  console.log('TutorMe is ready at http://localhost:1234');

});

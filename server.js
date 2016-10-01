var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req, res){
    counter=counter+1;
    res.send(counter.toString());    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

//additional url's
app.get('/ui/article1.html', function (req, res) {
  res.send('hi');
});

app.get('/ui/article2.html', function (req, res) {
  res.send('hi');
});

app.get('/ui/article3.html', function (req, res) {
  res.send('hi');
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get('/submit-name', function(req, res){
    //get the current name from the request
    
    var name=req.query.name;//1000 extract the name value
    names.push(name);
    //JSON=Javascript Object Notation
    res.send(JSON.stringify(names));
    }
);


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

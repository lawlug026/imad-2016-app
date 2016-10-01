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

//Creating template
var article_one={
    title:'Article one',
    content:`<p >
                This is a new paragraph on my first web page. I want my page to be filled iwth some content. As i m new to web development, thats why, i have been so poor in formatting & alignment
            </p>
            
            <hr width=200>
            <p>
                This is a new paragraph on my first web page. I want my page to be filled iwth some content. As i m new to web development, thats why, i have been so poor in formatting & alignment
            </p>`
};

function createTemplate(data){
    var title=data.title;
    var content=data.content;
    var HTMLTemplate=`<html>
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
            
       
    </head>
    <body>
        <H1 align='center'>This is the first heading of my web page</H1>
        <br>
        <hr width=100>
        <div class='container'>
            ${content}
        </div>
        
    </body>
</html>`;

return HTMLTemplate;

    `
    
}



//additional url's
app.get('/ui/article1.html', function (req, res) {
  res.send(createTemplate(article_one));
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

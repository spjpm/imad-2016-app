var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
"article-one":{
    title: 'Article-two',
    heading:'Article-two',
    content:`
     <p>
        WordPress started in 2003 and is now the largest selfhosted
blogging tool and is used on, literally, millions of
sites worldwide. You are in good company if you use WordPress to publish
on the web. Many famous blogs, news outlets, music
sites, Fortune 500 companies and celebrities are using
        </p>
      <p>
              WordPress started in 2003 and is now the largest selfhosted
blogging tool and is used on, literally, millions of
sites worldwide. You are in good company if you use WordPress to publish
on the web. Many famous blogs, news outlets, music
sites, Fortune 500 companies and celebrities are using
        </p>
    `
},
"article-two":{title: 'Article-two',
    heading:'Article-two',
    content:`
     <p>
        WordPress started in 2003
        </p>
      <p>
              WordPress started in 2003 and is now the largest selfhosted
blogging tool and is used on, literally, millions of
sites worldwide. You are in good company if you use WordPress to publish
on the web. Many famous blogs, news outlets, music
sites, Fortune 500 companies and celebrities are using
        </p>`
    
},
};


function createTemplate(data)
{
var title=data.title;
var heading=data.heading;
var content=data.content;
var htmlTemplate=
    `
    <html>
  <head>
    <title>
      ${title} 
      </title>
      <meta name="viewport" content="width,initial-scale=1">
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
  <body>
      <div>
          <a href="/">Home</a>
          </div>
           <hr/>
    <div>
     <h3> ${heading}</h3>
      </div>
      <hr/>
    <div>
      ${content}
      </div>
    </body>
</html>
`
;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

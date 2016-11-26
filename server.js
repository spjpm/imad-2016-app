var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
"article-one":{
    title: 'Article-One',
    heading:'Article-One',
    content:`
    <div>
     <p>
        WordPress started in 2003 and is now the largest selfhosted
        blogging tool and is used on, literally, millions of
        sites worldwide. You are in good company if you use WordPress to publish
        on the web. Many famous blogs, news outlets, music
        sites, Fortune 500 companies and celebrities are using
        </p>
        </div>`
},
"article-two":{title: 'Article-Two',
    heading:'Article-Two',
    content:`
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
     
       <link href="/ui/style.css" rel="stylesheet" />
       <link href="/ui/style.css" rel="stylesheet" />
       

<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<style>
/*-------------------------------*/
/*           VARIABLES           */
/*-------------------------------*/


body {
  position: relative;
  overflow-x: hidden;
}

body, html {
  height: 100%;
  background-color: #583e7e;
}

.nav .open > a { background-color: transparent; }

.nav .open > a:hover { background-color: transparent; }

.nav .open > a:focus { background-color: transparent; }

/*-------------------------------*/
/*           Wrappers            */
/*-------------------------------*/

#wrapper {
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled { padding-left: 220px; }

#wrapper.toggled #sidebar-wrapper { width: 220px; }

#wrapper.toggled #page-content-wrapper {
  margin-right: -220px;
  position: absolute;
}

#sidebar-wrapper {
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  background: #1a1a1a;
  height: 100%;
  left: 220px;
  margin-left: -220px;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  width: 0;
  z-index: 1000;
}
#sidebar-wrapper::-webkit-scrollbar {
 display: none;
}

#page-content-wrapper {
  padding-top: 70px;
  width: 100%;
}

/*-------------------------------*/
/*     Sidebar nav styles        */
/*-------------------------------*/

.sidebar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 220px;
}

.sidebar-nav li {
  display: inline-block;
  line-height: 20px;
  position: relative;
  width: 100%;
}

.sidebar-nav li:before {
  -moz-transition: width 0.2s ease-in;
  -ms-transition: width 0.2s ease-in;
  -webkit-transition: width 0.2s ease-in;
  background-color: #1c1c1c;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-nav li:first-child a {
  background-color: #1a1a1a;
  color: #ffffff;
}

.sidebar-nav li:nth-child(2):before { background-color: #52418a; }

.sidebar-nav li:nth-child(3):before { background-color: #5c499c; }

.sidebar-nav li:nth-child(4):before { background-color: #6651ad; }

.sidebar-nav li:nth-child(5):before { background-color: #7562b5; }

.sidebar-nav li:nth-child(6):before { background-color: #8473be; }

.sidebar-nav li:nth-child(7):before { background-color: #9485c6; }

.sidebar-nav li:nth-child(8):before { background-color: #a396ce; }

.sidebar-nav li:nth-child(9):before { background-color: #b2a7d6; }

.sidebar-nav li:hover:before {
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 100%;
}

.sidebar-nav li a {
  color: #dddddd;
  display: block;
  padding: 10px 15px 10px 30px;
  text-decoration: none;
}

.sidebar-nav li.open:hover before {
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 100%;
}

.sidebar-nav .dropdown-menu {
  background-color: #222222;
  border-radius: 0;
  border: none;
  box-shadow: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
}

.sidebar-nav li a:hover, .sidebar-nav li a:active, .sidebar-nav li a:focus, .sidebar-nav li.open a:hover, .sidebar-nav li.open a:active, .sidebar-nav li.open a:focus {
  background-color: transparent;
  color: #ffffff;
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  font-size: 20px;
  height: 65px;
  line-height: 44px;
}

/*-------------------------------*/
/*       Hamburger-Cross         */
/*-------------------------------*/

.hamburger {
  background: transparent;
  border: none;
  display: block;
  height: 32px;
  margin-left: 15px;
  position: fixed;
  top: 20px;
  width: 32px;
  z-index: 999;
}

.hamburger:hover { outline: none; }

.hamburger:focus { outline: none; }

.hamburger:active { outline: none; }

.hamburger.is-closed:before {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  color: #ffffff;
  content: '';
  display: block;
  font-size: 14px;
  line-height: 32px;
  opacity: 0;
  text-align: center;
  width: 100px;
}

.hamburger.is-closed:hover before {
  -webkit-transform: translate3d(-100px, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  display: block;
  opacity: 1;
}

.hamburger.is-closed:hover .hamb-top {
  -webkit-transition: all 0.35s ease-in-out;
  top: 0;
}

.hamburger.is-closed:hover .hamb-bottom {
  -webkit-transition: all 0.35s ease-in-out;
  bottom: 0;
}

.hamburger.is-closed .hamb-top {
  -webkit-transition: all 0.35s ease-in-out;
  background-color: rgba(255, 255, 255, 0.7);
  top: 5px;
}

.hamburger.is-closed .hamb-middle {
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-closed .hamb-bottom {
  -webkit-transition: all 0.35s ease-in-out;
  background-color: rgba(255, 255, 255, 0.7);
  bottom: 5px;
}

.hamburger.is-closed .hamb-top, .hamburger.is-closed .hamb-middle, .hamburger.is-closed .hamb-bottom, .hamburger.is-open .hamb-top, .hamburger.is-open .hamb-middle, .hamburger.is-open .hamb-bottom {
  height: 4px;
  left: 0;
  position: absolute;
  width: 100%;
}

.hamburger.is-open .hamb-top {
  -webkit-transform: rotate(45deg);
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
  background-color: #ffffff;
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-open .hamb-middle {
  background-color: #ffffff;
  display: none;
}

.hamburger.is-open .hamb-bottom {
  -webkit-transform: rotate(-45deg);
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
  background-color: #ffffff;
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-open:before {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  color: #ffffff;
  content: '';
  display: block;
  font-size: 14px;
  line-height: 32px;
  opacity: 0;
  text-align: center;
  width: 100px;
}

.hamburger.is-open:hover before {
  -webkit-transform: translate3d(-100px, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  display: block;
  opacity: 1;
}

/*-------------------------------*/
/*          Dark Overlay         */
/*-------------------------------*/

.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* SOME DEMO STYLES - NOT REQUIRED */

body, html { background-color: #583e7e; }

body h1, body h2, body h3, body h4 { color: rgba(255, 255, 255, 0.9); }

body p, body blockquote { color: rgba(255, 255, 255, 0.7); }

body a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline;
}

body a:hover { color: #ffffff; }
</style>
    </head>
  <body>
      
    <div id="wrapper">
  <div class="overlay"></div>
  
  <!-- Sidebar -->
    <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
    <ul class="nav sidebar-nav">
      <li class="sidebar-brand"> <a href="#"> MENU </a> </li>
      <li> <a href="#"><i class="fa fa-fw fa-home"></i> Home</a> </li>
      <li> <a href="#"><i class="fa fa-fw fa-folder"></i> Article one</a> </li>
      <li> <a href="#"><i class="fa fa-fw fa-file-o"></i> Second Two</a> </li>
      <li> <a href="#"><i class="fa fa-fw fa-cog"></i> Third page</a> </li>
      <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-plus"></i> Dropdown <span class="caret"></span></a>
        <ul class="dropdown-menu" role="menu">
          <li class="dropdown-header">Dropdown heading</li>
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li><a href="#">Separated link</a></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      </li>
      <li> <a href="#"><i class="fa fa-fw fa-bank"></i> Page four</a> </li>
      <li> <a href="#"><i class="fa fa-fw fa-dropbox"></i> Page 5</a> </li>
      <li> <a href="#"><i class="fa fa-fw fa-twitter"></i> Last page</a> </li>
    </ul>
  </nav>
  <!-- /#sidebar-wrapper --> 
  
  <!-- Page Content -->
  <div id="page-content-wrapper">
    <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas"> <span class="hamb-top"></span> <span class="hamb-middle"></span> <span class="hamb-bottom"></span> </button>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ">
          <h1 class="page-header">${heading}</h1>
          
    
      </div>
      <div>
      ${content}
      </div>
        
        </div>
      </div>
    </div>
  </div>
  <!-- /#page-content-wrapper --> 
  
</div>
<!-- /#wrapper --> 
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script> 
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> 
<script>
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
</script>
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

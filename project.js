var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 25768);

app.use(express.static('public/images'))

app.get('/', function(req, res){
	res.render('home_page')
	})

app.get('/survey', function(req, res){
	res.render('survey')
	})

app.get('/characters', function(req, res){
	res.render('chars_page')
	})

app.get('/locations', function(req, res){
	res.render('locations_page')
	})

app.get('/downloads', function(req, res){
	res.render('downloads')
	})

app.get('/otherprojects', function(req, res){
	res.render('other_proj_page')
	})

app.get('/about', function(req, res){
	res.render('about')
	})

app.use(function(req,res){
	res.status(404);
    res.render('404');
});



app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
const express = require('express');
const cons = require('consolidate');
const dust = require('dustjs-linkedin');

const PORT = 8012;

var app = express();

//access css files
app.use(express.static(__dirname + '/public'))


app.set('port',process.env.PORT || PORT);

//view engine as dust
app.engine('dust',cons.dust);
app.set('view engine','dust');
app.set('views',__dirname + '/views');

app.get('/',function(req,res){
	res.render('index');
});

app.get('/link1',function(req,res){
	res.render('link1');
});


app.get('/link2',function(req,res){
	res.render('link2');
});

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);



exports.listenServer = function(PORT){
	app.listen(PORT);
	
	return `Server running on http://localhost:${PORT}`;
	
}



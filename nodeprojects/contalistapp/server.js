var express = require('express');

var app = express();
var http = require("http");
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');
var multer = require ('multer');
var storage = multer.diskStorage({
	destination: function (req, file,callback){
		callback(null, 'index.html');
	},
	filename: function(req,file,callback){
		callback(null,file.fieldname + '-'+Date.now());
	}
});
var upload = multer({storage:storage}).single('proccess');
var fileupload = require('fileupload').createFileUpload('/uploadDir').middleware;
var csrf = require('csurf');
var passport = require('passport');
var globalusername= "";
var globalpassword="";
var readingFile = "";
var globaltitleMessage="";
var fs = require("fs");
//var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var io = require('socket.io')(http);
const hostname = 'localhost';
const port = 8080;

var server = http.createServer(app).listen(app.get('port'),function(){
	
});


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());	





app.get('/contactlist', function(req, res){

	console.log("I received a GET request")
	
	
	db.contactlist.find({email:globalusername}, function(err,docs){


		res.json(docs);
	})

	//db.contactlist.find(function(err,docs){
	//	console.log(docs);
	//	res.json(docs);
	
	
	//});

});




var dbcorseworks = mongojs('corseworks',['corseworks']);

app.get('/corseworks',function(req,res){
	console.log("I receive message get request for file")
	dbcorseworks.corseworks.find({email:globalusername},function(err,docs){
		console.log(docs);
		res.json(docs);
	})

});

var dbcorseworksMainPage = mongojs('corseworks',['corseworks']);
app.get('/corseworksMainPage',function(req,res){

	console.log("Testing Main Page");
	dbcorseworksMainPage.corseworks.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});



var dbcorseworksMainPageTwo = mongojs('corseworks',['corseworks']);


app.get('/corseworksOutlineTwo', function(req,res){
	dbcorseworksMainPageTwo.corseworks.find({name:readingFile},function(err,docs){
		console.log(docs);
		res.json(docs);
	})

});



app.post('/likebuttonincresing:idname',function(req,res){
	var idname= req.params.idname;
	console.log(idname);
	dbcorseworksMainPageTwo.corseworks.findAndModify({query:{name:idname},update:{$inc:{like:1}}},function(err,doc){
		res.json(doc);
	});
	
	

 		//57065d22b4e790fdd664af04
 		console.log("update and increse the like button ");
 	});


//'/loginusers/:emailuser' + '/loginusers/:pass'
var dblike = mongojs('likecourseworks',['likecourseworks']);


app.post('/postmessagecomments/:messageText' + '/postmessagecomments/:title', function(req,res){
	var messageComment = req.params.messageText;
	globaltitleMessage = req.params.title;
	console.log(messageComment);
	console.log(globaltitleMessage);
	dblike.likecourseworks.insert({name:globalusername,title:globaltitleMessage,bodyMessage:messageComment},function(err,doc){
		console.log("insert message to database");
	});
	
});


app.get('/likecourseworks', function(req,res){
 	//var titleCou= req.params.textj;
 	console.log(readingFile);
 	dblike.likecourseworks.find({title:readingFile},function(err,doc){
 		//globaltitleMessage ="";
 		res.json(doc);
 		//console.log(titleCou);
 		//
 	})
 });


app.post('/corseworksOutlineTwo:nameTitle', function(req,res){
	
	console.log("trying to get the website");

	readingFile = req.params.nameTitle;

	console.log(req.params.nameTitle);
	




});









var dbloginusers = mongojs('loginusers',['loginusers']);






var mongojs = require('mongojs');
var dbinfo = mongojs('information',['information']);
app.get('/information', function(req,res){
	
	
	console.log("Received information about the articles")
	dbinfo.information.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	});
});



app.get('/AboutUs',function(req,res){

	console.log('Open new tabe');
	res.redirect('/AboutUs');

});


app.get('/afterlogin/',function(req,res){

	console.log('Open new tabe hehhhxdohvsdoknc');

});

app.get('/WithoutLogin',function(req,res){
	res.redirect('/homepage');
});




app.get('/names', function(req,res){
	dbloginusers.loginusers.findOne({email:globalusername, password:globalpassword}, function(err,docs){
		console.log(docs);
		res.json(docs);
	})
	//	console.log(globalusername+'sdjbfsidbcisdbcisbcbdsibcdisuciub');
	//	res.json(globalusername);

});




var mongojs = require('mongojs');
var dbcomment = mongojs('comments',['comments']);	


app.get('/comments', function(req,res){
	
	
	console.log("Received information about the articles")
	dbcomment.comments.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	});
});







app.post('/comments',function(req,res){

	console.log(req.body);
	
	dbcomment.comments.insert(req.body,function(err,doc){
		res.json(doc);
		
		
	});

	

});

app.delete('/comments/:id', function(req,res){
	
	var id = req.params.id;
	console.log(id);
	dbcomment.comments.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
		
		
	});
});


app.post('/Search:searchbutton', function(req,res){

	var searchData= req.params.searchbutton;
	dbcorseworks.corseworks.findOne({name:searchData}, function(err,result){
		if (result){

			console.log("Found record, return back to the API");
			console.log(result);
		}
		else{
			console.log("Not Found");
		}
	})
	
});	





app.post('/loginusers/:emailuser' + '/loginusers/:pass' ,function(req,res){
	globalusername= req.params.emailuser;
	console.log(globalusername);
	globalpassword = req.params.pass;
	console.log(globalpassword);
	
	dbloginusers.loginusers.findOne({email:globalusername, password:globalpassword}, function(err,result){
		
		if (!result){
			console.log("Wrong");
		}
		else{
			
			
			console.log("True");
			
			
			
			
		}
	});	
	
});

app.post('/afterlogin' , function (req, res){


	
	if (globalusername == ''|| globalpassword == ''){
		res.redirect('/');
	}else{
		
		dbloginusers.loginusers.findOne({email:globalusername, password:globalpassword}, function(err,result){
			if (result){
				test=true;
				globalusername== '';
				globalpassword='';
				res.redirect('/afterlogin');
		//res.send(globalusername);
		
		//dbloginusers.close();
		
	}
	else{
		res.redirect('/');
	}
})
	}
});

app.get('/*',function(req,res){

	res.redirect('/');

	

});


app.post('/contact',function(req,ress){

	res.redirect('/contact');
});

app.post('/savecontactmongodb:email' + '/savecontactmongodb:password' , function(req,res){
	var user=req.params.email;
	var userpass=req.params.password;
	console.log(req.params.email);
	console.log(req.params.password);
	dbloginusers.loginusers.find({email: user}, function(err,result){
		if (result==false){
			dbloginusers.loginusers.insert({email: req.params.email , password: req.params.password});
			console.log("Successfull");
		}else{
			console.log(result);

			console.log("same username");
			res.writeHead(404,{"Content-Type": "text/plain"});
			res.write("Error 404 : Page not found");
			
		}
	});

});


app.post ('/savecontactextramongodb:name' + '/savecontactextramongodb:surname'+ '/savecontactextramongodb:email',function(req,res){
	var usernametext = req.params.name;
	var usersurnametext= req.params.surname;
	var user=req.params.email;

	dbloginusers.loginusers.find({email:user}, function(err,result){
		if (result==false){
			db.contactlist.insert({name: req.params.name , surname: req.params.surname, email:req.params.email});
			console.log("Successfull");
		}
		else{

			console.log("not insert into db!");
			res.writeHead(404,{"Content-Type": "text/plain"});
			res.write("Error 404 : Page not found");
			res.end();

		}
		
	});
});







app.post('/Files', function(req,res){
	console.log("Takign here!");
	upload (req,res,function(err){
		if (err){	
			return res.end("Error upload File");
		}
		res.end("File is uploaded");
	});
});

var dbcorseworks = mongojs('corseworks',['corseworks']);
app.post('/Pasing:input' + '/Pasing:nameinput',function(req,res){
	//var takepaths=req.params.takepath;
	//console.log(takepaths+"Here");

	var inputDa= req.params.input;
	var nameF = req.params.nameinput;
	dbcorseworks.corseworks.insert({email:globalusername,name:req.params.nameinput,bodyText:req.params.input,like:0});
	console.log("successfully add name on database");
	console.log("Creating File");
	console.log("The name of the file is: "+nameF);

	fs.appendFile(nameF+'.txt', inputDa, function(err){
		if (err) throw err;
		console.log('successfully created');
	});
});


app.post('/upload', fileupload, function(req,res){
	console.log("Heloooo!");
});

app.post('/Motis',function (req,res){
	console.log("TESTTT HERE"+req.params);
	
	fs.readFile(j, function (err, data) {
		
		var newPath = __dirname + "/uploads/uploadedFileName";
		fs.writeFile(newPath, data, function (err) {
			res.redirect("back");
		});
		console.log(j);
	});
});





// app.post('/file-upload', function(req, res) {

// 	 var tmp_path = req.files.thumbnail.path;
//     // set where the file should actually exists - in this case it is in the "images" directory
//     var target_path = '/afterlogin/uploads/' + req.files.thumbnail.name;
//     // move the file from the temporary location to the intended location
//     fs.rename(tmp_path, target_path, function(err) {
//         if (err) throw err;
//         // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
//         fs.unlink(tmp_path, function() {
//             if (err) throw err;
//             res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
//         });
//     });
// });





//	app.get('/names', function(req, res){
//		dbloginusers.loginusers.findOne({email:globalusername, password:globalpassword}, function(err,result){

	//			res.json(doc);
	//			console.log("hello HSDCBDSCDS CDJSCDJS");
	//			console.log(result);

	//	});

	//		console.log("I received a GET request names");

		//res.json(globalpassword);
	//});


//app.listen(3000);


// var execPhp = require('exec-php');


// 	execPhp('file.php', function(error, php, outprint){
//     // outprint is now `One'.
//     	console.log("php reading");



// });	


	// var buf = new Buffer('writing a buffer to a file.');

	// var fd = fs.openSync('public/target.txt', 'w');
	// 	fs.writeSync(fd, buf,0,buf.length,10);
	// 	console.log('Buffer successfully written to file.');
	var dbcontact= mongojs('contactEmails',['contactEmails']);

	app.post('/contactDetails',function(req,res){
		if (req.body == ''){
			
		}else{
			dbcontact.contactEmails.insert(req.body, function(err,doc){
				res.json(doc);
			});
			console.log(req.body);
		}
	});


	app.get('mostfavorite', function(req,res){
		//dblike.likecourseworks.find(function(err,doc){

		//});
});



	
    // Check to see if initial query/notes are set
    


    http.createServer(app).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var bodyparser = require('body-parser')
var urlencoded = bodyparser.urlencoded({extended:false})
const UserController = require('../controllers/user_controller')



module.exports = function(app){
	app.get('/',function(req,res,next){
		res.end("Hello world")
	})

	app.get("/login",function(req,res){
		UserController.login(req,res)
	})

	app.get('/register',function(req,res){
		UserController.register(req,res)
	})
	app.get('/index',function(req,res){
		res.render("index")
	})
	app.post("/process_data",urlencoded,function(req,res){
		response={
			first_name:req.body.first_name,
			last_name:req.body.last_name
		};
		res.end(JSON.stringify(response))
	})

	app.get("/*list",function(req,res){
		res.send("list page")
	})

	app.post('/file_upload',function(req,res){
		console.log(req.files)
		res.send(req.file)
	})

	app.get('/upload',function(req,res){
		res.render("upload")
	})
}
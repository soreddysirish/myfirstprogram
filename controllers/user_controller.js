var login = function(req,res){
	res.render("users/login", {name:"sirish"})
}

var register = function(req,res){
	res.render("users/register")
}

module.exports={
	login:login,
	register:register
}
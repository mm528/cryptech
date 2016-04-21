module.exports = function(router, passport){
	
	router.use (function(req, res, next){
		if (req.isAuthenticated()){
			return next();
		}
		
		res.redirect('/');
	});
	
	
}
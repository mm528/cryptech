function AppCtrl($scope,$http) {
	console.log("Hello world from controller");
var refresh =function(){	//have to receive detail back ! LOOOK!
	
	$http.get('/contactlist').success(function(response){
		
		console.log("I got the data !");
		$scope.contactlist= response;
		
	});





	
};




var refresh3 = function(){
	$http.get('/corseworks').success(function(response){
		console.log("Trying to get files");
		$scope.corseworks=response;
	});

};	


var refresh5 = function(){

	$http.get('/corseworksMainPage').success(function(response){
		console.log("Main Page is working with corseworks");
		$scope.corseworksMainPage= response;
	});


}





var refresh10 = function(){//fix it hEREEE!! 9/4/2016
 	// $scope.init = function(name){
 	// 	$http.get('/likecourseworks'+name).success(function(response10){
 	// 	$scope.likecourseworks= response10;
 	// });
 	// }
	//alert(idNameTitle);
	
 //alert("hello");

//  $scope.testC = function(idTitle){
//  		var jTest= idTitle;
// 	alert(idTitle);


// }
$http.get('/likecourseworks').success(function(response10){
	
	
	$scope.likecourseworks= response10;
	
});
}



var refresh4 = function(){
	$http.get('/loginusers').success(function(response){
		console.log("Trying to get emails!");
		$scope.names=response;
	});

};	

var refresh9 = function(){
	$http.get('/corseworksOutlineTwo').success(function(response9){

		$scope.corseworksOutlineTwo = response9;
	})};



	$scope.testController= function(nameTitle){
		console.log(nameTitle);

		$http.post('/corseworksOutlineTwo'+nameTitle).success(function(response10){
					//$scope.corseworksOutlineTwo = response9;
					console.log("successful getting data");
					
				});
		



	};

	$scope.likebutton= function(idname){
		console.log(idname);
		
		$http.post('/likebuttonincresing'+idname).success(function(response12){
			console.log("incresing the like");
			refresh9();
		});
	};

	$scope.postmessage = function(titlename){
		console.log($scope.textbody);
		console.log(titlename);

		$http.post('/postmessagecomments/'+ $scope.textbody +'/postmessagecomments/'+titlename).success(function(response13){
			console.log("postiing message");
			refresh10();

		});

	};

	$scope.testContact = function(){
		console.log($scope.contact);
		$http.post('/contactDetails', $scope.contact).success(function(response13){
			console.log("response");
		});

		
		
	}


	var refresh2 =function(){	
		
		$http.get('/information').success(function(response2){
			
			console.log("I got the data !");
			$scope.information= response2;
			
		});
	};


	$scope.getnames = function(){
		
		
		$http.get('/names').success(function(response6){
			console.log("I got the data MICHAELLLLL !");
			$scope.getnames= response6;

		});

		
	};




	$scope.Showcomments = function(){	
		

		$http.get('/comments').success(function(response5){
			
			console.log("I got the data comments !");
			$scope.comments= response5;
			
		});
	};
	
	$scope.addComment = function(){
		if(!($scope.comments) == ""){
			console.log($scope.comments);
			$http.post('/comments',$scope.comments);
			$scope.comments="";
			
			
			
		}
		else {
			console.log("EMPTY!")
			alert("Empty!");
		};
		
	};
	
	$scope.deletecomments = function(id){
		console.log(id);
		$http.delete('/comments/' + id)
		
		
	}; 


	

	$scope.savecontact = function(){
		var username = document.getElementById("findusername").value;
		var userpass = document.getElementById("findpassword").value;
		
		console.log($scope.contact);
		if (username == '' || userpass == ''){
		//alert("Please, insert username or password")
	}else{
		$http.post('/savecontactmongodb'+ username +'/savecontactmongodb'+ userpass);
				//username = document.getElementById("findusername").value="";
				//userpass = document.getElementById("findpassword").value="";

			}
		};

		$scope.savenameandsurname = function(){
			var usernametext = document.getElementById("getname").value;
			var usersurnametext = document.getElementById("getsurname").value;
			var username = document.getElementById("findusername").value;

			console.log("get user name password and email ");
			if (usernametext == '' || usersurnametext == '' || username == '' ){
						//alert("Please, insert username or password or name");
					}
					else{
						$http.post('/savecontactextramongodb'+ usernametext +'/savecontactextramongodb'+ usersurnametext + '/savecontactextramongodb'+ username);

			//	usernametext = document.getElementById("getname").value="";
			//	usersurnametext = document.getElementById("getsurname").value="";
			//	username = document.getElementById("findusername").value="";

		}


	};

	$scope.Submit = function(){
		alert("test");

	}


	$scope.searchuser = function(emailuser,pass){
		var name = document.getElementById("login-name-text").value;
		var pass = document.getElementById("login-pass").value;
		
		if (name == '' || pass == ''){
			console.log("Error, Empty");
	//alert("Put username or password");
	

	
}else{
	
	$http.post('/loginusers/'+ emailuser + '/loginusers/'+pass);
	

	
};

name = document.getElementById("login-name-text").value="";
pass = document.getElementById("login-pass").value="";

};	



$scope.PushData = function(name){
	var m = document.getElementById("motistest").value;
	alert(name);
	$http.post('/Motis');


}
$scope.Contact = function(){


	$http.post('/contact');
}	

$scope.AboutUs = function(){
	alert("AboutUs");
	http.post('/AboutUs');
};

$scope.WithoutLogin = function(){

	$http.post('/WithoutLogin');
};


$scope.sortColumn = "name";


$scope.Motis= function(){
 // var x = document.getElementById("fileuploadmotis").value;
 //    document.getElementById("demo").innerHTML = x;
 // alert(x);

 var input= document.getElementById("inputData").value;
 var nameinput= document.getElementById("nameFile").value;

 $http.post('/Pasing'+input + '/Pasing'+nameinput);


 input= document.getElementById("inputData").value = "";
 nameinput= document.getElementById("nameFile").value="";


};



//$scope.getnames =  function(){
	//('/names').success(function(response6){
	//		alert("hello");
	
//			$http.get('/names'),success(function(response6){

//				console.log("YEAAAHHHH!!");
//				$scope.names= response6;
//			});
//





			//$scope.names= response6;
//};

$scope.test = function(){
	var searchbutton = document.getElementById("search").value;
	if(searchbutton == ''){
		alert("Empty is not allowed");
	}else{
		$http.post('/Search'+searchbutton).success(function(response){
			document.getElementById("cleardata").innerHTML = "HSDHSN";

			

			
		});
	}
}

refresh();
refresh2();
refresh3();
refresh4();
refresh5();
refresh9();
refresh10();
}
<html ng-app>
<head>
<meta charset= "utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name = "viewport" content="width=device-width, initial-scale=1">
<title> Cryptech</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link href="bootstrap-3.3.6-dist/css/bootstrap.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src= "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.29/angular.min.js"></script>


</head>

<?php
echo "Iam trying with php MIIIIXHHHAAALIIIS";

?>

<body class="homepage">
		<div id="page-wrapper">

<video autoplay loop poster="polina.jpg" id="bgvid">
    <source src="Dissertation Video.mp4" type="video/mp4">
    <source src="Dissertation Video.mp4" type="video/mp4">
</video>
  
<div class= "navbar navbar-inverse navbar-fixed-top" role ="navigation">
		<div class = "container">
			<div class = "navbar-header">
		
					<span class= "icon-bar" > </span>
						<span class= "icon-bar" > </span>
							<span class= "icon-bar" > </span>
			
					<a class="navbar-brand" href="/"> Welcome to University of Brighton </a>
					
			</div>

            <div class="navbar-collapse collapse">
				<ul class= "nav navbar-nav navbar-right">
					<li class = "active"> <a href="#">Home</a> </li>
			
					<li class="dropdown"><a href="#" data-toggle="dropdown">About <span class="caret"> </span> </a> </li>
								<ul class = "dropdown-menu">
										<li><a href="#">Test </a></li>
								</ul>
							
							</ul>
			
			</div>

		</div>
</div>


<div class="container">
	<div class="inner">
	

</div>


<div class="container" ng-controller="AppCtrl">
<div class="jumbotron">


<!-- Tropo ton opio na pernw to onoma tou user p sindethike -->

<div class="container">
<h1 id="editH1"> Welcome About Us Brighton  </h1>
			<a href="#banner" class="button circled scrolly glyphicon glyphicon-menu-down" id="buttonedit">Scroll Down</a>
           

  		</div>

</div>

</div>

</div>

<section id="banner">
	<div class= "jumbotron ">
<p> A part of Brighton since 1859, the university has been guided by its original ethos to become the diverse, multidisciplinary institution that it is today.

With 20,700 students studying across five campuses in Brighton, Eastbourne and Hastings, the university community demonstrates civic responsibility across the south coast and beyond.

We are defined by a commitment to social relevance, steering our curriculum and research projects away from the ivory tower and toward the fulfilment of public good as a trusted partner.

This not only involves active engagement with a local and global community but includes a coordinated effort toward creating an equal and sustainable environment within the university. This is based on the shared values of engagement, diversity, participation, collaboration and sustainability.

We are the leading university for the professions, particularly medicine, nursing, engineering and pharmacy.</p>
</div>
	<a href="#banner2" class="button circled scrolly glyphicon glyphicon-menu-down" id="buttonedit">Scroll Down</a>
</section>



<section>
	<div class="container">
	<center><h1> Brighton Location </h1></center>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40314.55314902269!2d-0.14120909059134545!3d50.83746931443787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758509f6294167%3A0x9cc6af7a727d0ef9!2sBrighton%2C+The+City+of+Brighton+and+Hove!5e0!3m2!1sen!2suk!4v1455992868680" width="100%" height="500" frameborder="0" style="pointer-events:none" allowfullscreen></iframe>
</div>
</section>



<selection id="banner2">

	<h1>Milestones in our history </h1>

<p>The University of Brighton is steeped in history and since its humble beginnings 150 years ago, in the kitchens of the Royal Pavilion, a great many institutions have come together to make it one of today’s leading modern universities.

We can trace our origins back to the mid-19th century in Brighton and the mid-20th century in Eastbourne. Since being granted university status in 1992 the university has grown steadily. More than 7,000 students graduate each year in a range of subjects as diverse as automotive engine design, law with accountancy, midwifery, three-dimensional design, architecture and pharmacy.

To explore how we got here, we have picked out key moments that have shaped and defined the institution. The following is a pictorial overview of the milestones and major landmarks in the history of the University of Brighton.</p>


</selection>


<!--


<div class="container">


<div class = "table-responsive" ng-controller="AppCtrl">
<h1 ng-repeat = "info in information"> {{info.title}} </h1>




<table class="table table-hover" >	

	<tr ng-repeat ="info in information">
		<th> Title </th>
		<td> {{info.title}}</td>
	</tr>
	<tr ng-repeat ="info in information">
		<th> Descriptions </th>
		<td> {{info.description}}</td>
	</tr>	
	

<tr> <!-- add input box and button-->
<!--
<td> <input class ="form-control" ng-model="comments.name" placeholder = "Put comment"></td>
<td> <button class ="btn btn-primary" ng-click="addComment()">Add Comment</button></td>


</tr>	
</table>
<table class= "edit2">
<tr ng-repeat ="comment in comments" >
	<td> Comments </td>
	<td>{{comment.name}}</td>
 	<th> <button class = "btn btn-danger"  ng-click ="deletecomments (comment._id)" > Delete comment </button></th>

</tr>

<button class ="btn btn-primary" ng-click="Showcomments()">Show comments</button>
</table>
</div>
</div>

<div class="container">

<h2> Select Categegory </h2>


<p>Upload file to the server</p>
	<span class="btn btn-default btn-file">
    Browse <input type="file">
   

</span>
 <input type="submit" value="Send"/>





 
 </div>
-->





<!--


<div ng-controller = "ImagesController">
 <div bn-image-uploader class="driozone" >
 <ul ng-switch-when ="true" class="queue">
 	<li ng-repeat="item in queue track by item.id">
 		{{item.percent}}%
 		</li>
 	</ul>

</div>
 
</div>



 	<label for = "exampleInputFile">Upload</label>
 	<input type="file" id="exampleInputFile" file-model = "customer.file">
 	</div>
 	<button type= "submit" class="btn btn-default" ng-click="Submit()">Subimt</button>
-->


<script src="../controllers/controller.js"></script>


            
<script src="../assets/js/jquery.min.js"> </script>
<script src="../assets/js/jquery.dropotron.min.js"> </script>
<script src="../assets/js/jquery.scrolly.min.js"> </script>
<script src="../assets/js/jquery.onvisible.min.js"> </script>
<script src="../assets/js/skel.min.js"> </script>
<script src="../assets/js/util.js"> </script>
<script src="../assets/js/main.js"> </script>           
            

<link rel="stylesheet" href="AboutUsEdit.css">
<link rel="stylesheet" href="../assets/css/main.css">

</div>
  


</body>
</html>
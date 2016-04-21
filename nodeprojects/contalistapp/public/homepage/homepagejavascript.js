var fr = new FileReader();
fr.onload= function (){
	document.getElementById("verify").textContext=this.result;
	
}
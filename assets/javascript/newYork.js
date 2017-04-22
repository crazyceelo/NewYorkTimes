$(document).ready(function(){
	$.ajax({
		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&api-key=779637ec50164d03bb3f7ea854ec05f3";
		method: "GET"
	}).done(function(response){
		console.log(response);
	})
})
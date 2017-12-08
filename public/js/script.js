$(document).ready(function(){

	const speciesList = [];

	$.getJSON('http://localhost:8081/species', function(data){

		for(let i = 0; i < data.length; i++){
			speciesList.push(data[i].name);
		}

	});
	

	$.getJSON('http://localhost:8081/sightings', function(data){

		let ul = document.getElementById("sightings");
		let li = document.createElement("li");

		for(let i = 0; i < data.length; i++){
			$('#sightings').append('<li>'+data[i].id+', '+data[i].species+', '+data[i].count+'</li>');
		}
		
	});

});


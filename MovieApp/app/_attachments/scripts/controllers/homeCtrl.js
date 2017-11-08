app.controller('homeCtrl', function ($scope, actorSrv) {
	
	$('#searchButton').on('click', function (e) {
		
		var actor = $('#actorText').val();
		
		actorSrv.getActor(actor).then(function(data){
			var movies = JSON.stringify(data.data[0].filmography.actor);
			console.log(movies);
		});
	});
});
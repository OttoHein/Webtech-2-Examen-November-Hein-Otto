app.controller('homeCtrl', function ($scope, actorSrv, moviesSrv) {
	
	$('#searchButton').on('click', function (e) {
		
		$scope.movielist = [];
		var actor = $('#actorText').val();
		
		actorSrv.getActor(actor).then(function(data){
			var filmography = data.data[0].filmography.actor;
			
			$scope.movielist = moviesSrv.getAllMovieTitles(filmography);
		});
	});
});
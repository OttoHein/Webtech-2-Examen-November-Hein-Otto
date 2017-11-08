app.controller('homeCtrl', function ($scope, actorSrv, moviesSrv, saveSrv) {
	
	$('#searchButton').on('click', function (e) {
		
		$scope.movielist = [];
		var actor = $('#actorText').val();
		//if(Object.keys(actor).length == 0){
			actorSrv.getActor(actor).then(function(data){
				var filmography = data.data[0].filmography.actor;
				$scope.movielist = moviesSrv.getAllMovieTitles(filmography);
				saveSrv.setObject(actor, data);
			});
		//}
		//else {
			//var filmography = saveSrv.getObject(actor);
			//$scope.movielist = moviesSrv.getAllMovieTitles(filmography);
		//}
	});
});
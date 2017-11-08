app.service('actorSrv', function($http,$q) {
	
	this.getActor = function(actor) {
		var q = $q.defer();
		var url = 'http://theimdbapi.org/api/find/person?name=' + encodeURIComponent(actor) + '&format=json';

		$http.get(url)
			.then(function(data){
				q.resolve(data);
			}, function error(err) {
				q.reject(err);
			});
			
			return q.promise;
		};
});
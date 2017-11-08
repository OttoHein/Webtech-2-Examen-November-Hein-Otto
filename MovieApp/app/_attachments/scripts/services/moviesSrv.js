app.service('moviesSrv', function($http) {
	this.getAllMovieTitles = function (filmography) {
		var list = [];
	    for (var j = 0; j < filmography.length; j++) {
	             list.push(filmography[j].title);
	    }
	    return list;
	};
});
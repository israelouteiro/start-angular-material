	//Fabrica async
	app.factory('fabric', function($http){
		var factory = {};

		factory.getAlgo = function(param){
			return $http.get( GLOBAL_SERVER_LOCATION + 'service/algo.php?p='+param );
		};

		return factory;
		
	});
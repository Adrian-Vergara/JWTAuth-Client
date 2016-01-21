(function(){
	'use strict';
	angular
		.module('App')
		.service('UsuariosService', function($http){
		var service = this;
		var url = "http://localhost:8000/api/usuarios";

		service.registrar = function(usuario){
			console.log(usuario);
			var req = $http.post(url, usuario);
			return req;
		};

		service.get = function(){
			var req = $http.get(url);
			return req;
		};
		service.put = function(id, usuario){
			var req = $http.put(url + "/" + id, usuario);
			return req;
		}

	});

})();
/* Variaveis Globais ! */

var GLOBAL_IS_WEB = true;
var GLOBAL_SERVER_LOCATION = 'http://54.94.249.195/';


/* Inicialização do Angular */
var app = angular.module( 'angularApp' , ['ngRoute','ngAnimate','ngMaterial'] );
//configuração das rotas do app ;
app.config(function($routeProvider, $mdThemingProvider){
		$routeProvider.when('/',{
			controller: 'c_login',
			templateUrl: 'views/login.html'
		})
		.when('/init',{
			controller: 'c_init',
			templateUrl: 'views/init.html'
		});

		$mdThemingProvider.theme('default').primaryPalette('pink', {
	      'default': '600', 
	      'hue-1': '500', 
	      'hue-2': '700', 
	      'hue-3': '800'

	    }).accentPalette('grey',{
	      'default': '300', 
	      'hue-1': '500', 
	      'hue-2': '700', 
	      'hue-3': '600'

	    }).warnPalette('grey',{
	      'default': '600', 
	      'hue-1': '500', 
	      'hue-2': '700', 
	      'hue-3': '900'

	    });

});




/*

//	Plugins Utilizados no Cordova

 - org.apache.cordova.file
 - org.apache.cordova.inappbrowser
 - org.apache.cordova.media-capture
 - org.apache.cordova.dialogs

 - cordova-plugin-google-analytics

*/





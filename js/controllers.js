//Controllers
	//#
	app.controller('c_login' , function( $scope, $location, $mdDialog, fabric ){		
		var init = function(){

			$scope.enderecoServidor = GLOBAL_SERVER_LOCATION;
			
			$scope.changeView = function(view){
				$('#content_angular').attr('class','slide');
				$location.path(view);
			};

			$scope.showAlert = function(ev, mensagem) {
			    $mdDialog.show(
			      $mdDialog.alert()
			        .parent(angular.element(document.body))
			        .title(mensagem)
			        .content('')
			        .ariaLabel('ALERT')
			        .ok('OK')
			        .targetEvent(ev)
			    );
			};
			
		};
		init();
		
	});

	//#
	app.controller('c_init',function( $scope, $location, $mdUtil, $log, $mdDialog, $mdSidenav, $sce, $route ){
		var init = function(){

			showLoad();

			$scope.enderecoServidor = GLOBAL_SERVER_LOCATION;

			$scope.toggleLeft = buildToggler('left');

			$scope.changeView = function(view){
				$('#content_angular').attr('class','slide');
				$location.path(view);
			};

			$scope.urlConfiavel = function(url){
				return $sce.trustAsResourceUrl(url);
			}
			
			$scope.showConfirmPitch = function(ev, msg) {
				var confirm = $mdDialog.confirm()
			      .parent(angular.element(document.body))
			      .title(msg)
			      .content('')
			      .ariaLabel('Confirmation')
			      .ok('OK')
			      .cancel('CANCEL')
			      .targetEvent(ev);

				    $mdDialog.show(confirm).then(function() {
				      	// alert('sim')

				    }, function() {
				     	//	alert('nao')

				    });
			};
			
			/* Adicionando eventos	*/

			$('md-content#content_angular').scroll(function() {
			   	if( $('md-content#content_angular').scrollTop() + $(window).height() >= $('md-content#content_angular .container').height() ) {

			   		// console.log('chegou no bottom')
			   		
			   	}
			});

			$(document).off('click', 'md-tab-item' )
			.on('click' , 'md-tab-item' , function(){
				// navegou nas tabs
			});

			hideLoad();

		};
		init();

		function buildToggler(navID) {
	        var debounceFn =  $mdUtil.debounce(function(){
	            $mdSidenav(navID).toggle()
	              .then(function () {

	               // $log.debug("toggle " + navID + " is done");

	              });
	          },300);
			return debounceFn;
	    }

	}).controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, $route, $location) {
	    $scope.close = function () {
	      $mdSidenav('left').close()
	        .then(function () {
	        	// fechou menu
	        });
	    };
	});













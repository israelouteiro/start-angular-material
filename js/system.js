 
	/* Generic functions */

	var abreLink = function(links){
		if(GLOBAL_IS_WEB){
			window.open(links,'_new'+Math.random(1,10));
		}else{
			if ( typeof navigator !== "undefined" && navigator.app )  
			    navigator.app.loadUrl( links, { openExternal:true } )
			else // iOS and others
			    window.open( links, '_system', 'location=no') 
		}
	};
	
	var alerta = function(texto){
		if(GLOBAL_IS_WEB){
			alert(texto);
		}else{
			try{
				navigator.notification.alert('', null, texto);
			}catch(e){
				alert(texto);
			}
		}
	};

	/* Validations */

	function validateEmail(email) {
	    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    return re.test(email);
	}

	/* Loads */

	var showLoad = function(){
		$('#loadera').show();
	};

	var showLoadProgress = function(){

		$('body').prepend(
		'<div style="position:fixed;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:101;visibility:visible;top:0;left:0;" id="loaderaProgress">'+
			'<div class="container" style="position:absolute;top:40%;width:100%;">'+
				'<div class="col-md-12 text-center"'+
					'<p><h3 style="color:#fff;">SENDING ...<h3></p>'+
					'<div class="progress" style="margin-top:5%;">'+

						//'<md-progress-circular md-mode="determinate" id="progressLiteralBar2" value="0"></md-progress-circular>'+

						 '<div class="progress-bar progress-bar-striped progress-bar-danger active" role="progressbar" id="progressLiteralBar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">'+
						   '<span class="sr-only" id="expressaoLoad">0% Complete</span>'+
						 '</div>'+

					'</div>'+
				'</div>'+
			'</div>'+
		'</div>');

	};

	var hideLoad = function(){
		$('#loadera').hide();
	};

	var hideLoadProgress = function(){
		$('#loaderaProgress').remove();
	};

	/* Dates */
	
	var getDate = function(){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			
			if(dd<10) {
			    dd='0'+dd
			} 

			if(mm<10) {
			    mm='0'+mm
			} 

		return today;
	}

	/* Storage */
	var getStorage = function(ditem){
		return localStorage.getItem(ditem);
	};

	var setStorage = function(ditem,valor){
		localStorage.setItem(ditem, valor);
	};

	var clearAllStorage=function(){
		/* Warning - don't use it */
		localStorage.clear();
	};


	/* Encodes */
	function encode_utf8(s) {
	  return unescape(encodeURIComponent(s));
	}

	function decode_utf8(s) {
	  return decodeURIComponent(escape(s));
	}
	
	


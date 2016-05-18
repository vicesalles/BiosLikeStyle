window.onload = localitzam;

var lloc

function localitzam(){
	
	if (navigator.geolocation){
	
		navigator.geolocation.getCurrentPosition(mostraPosicio);	
		
		}else{
		
		
		}
	
}
	
function mostraPosicio(position){
	
	var latitud= position.coords.latitude;
	var longitud= position.coords.longitude;
	console.log("latitud: "+latitud+" longitud: "+longitud);
	
	};
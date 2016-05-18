onmessage= pingPong;
alert("harry");
function(event){
	
	if (event.data == "ping"){
		
		postMessage("pong");
		
		}else{
			alert("harry");
			
			}
	
}
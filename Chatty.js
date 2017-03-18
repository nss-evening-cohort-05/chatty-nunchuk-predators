var Chatty = (function(oldChatty){

	// var privateMessageArray = [];
	var data;

	function getData(){
		var jData = JSON.parse(this.responseText);
		data = jData.messages;
		for (var i=0;i<data.length; i++){
			Chatty.writeNewMessageToArray(data[i].user_message);
		}
		return data;
	}

	function fileFailed(){
		alert("Request Timed Out");
	}

	var messageRequest = new XMLHttpRequest();
	messageRequest.addEventListener("load", getData);
	messageRequest.addEventListener("error", fileFailed);
	messageRequest.open("GET","boilerplate.json");
	messageRequest.send();

	  oldChatty.getXhr = function(){

	  	return data;

	  }
	  oldChatty.writeXhr = function(){


		}
	return oldChatty;

})(Chatty || {});
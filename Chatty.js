var Chatty = (function(){

	var data;

	function getData(){
		var jData = JSON.parse(this.responseText);
		data = jData.messages;
		return data;
	}

	function fileFailed(){
		console.log("failed");
	}

	var messageRequest = new XMLHttpRequest();
	messageRequest.addEventListener("load", getData);
	messageRequest.addEventListener("error", fileFailed);
	messageRequest.open("GET","boilerplate.json");
	messageRequest.send();

	return {

	  getXhr: function(){

	  		return data;

	  },
	  writeXhr: function(){

	  		writeFillerMessageToDom(Chatty.getXhr());
	  }
	};

})();
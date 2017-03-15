var Chatty = (function(){

	var data;

	function getData(){
		var jData = JSON.parse(this.responseText);
		console.log("jData is " + jData.messages);
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
	console.log("messageRequest", messageRequest);

	return {

	  getXhr: function(){

	  		return data;

	  },
	  setXhr: function(){
	  		// set with something involving DOMhandler
	  }
	}
})();
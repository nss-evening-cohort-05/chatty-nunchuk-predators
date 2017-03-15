var Chatty = (function(){

	dataArray = [];

	function getData(){
	var jData = JSON.parse(this.responseText);
	dataArray.push(jData);
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

	  		return dataArray;

	  }
	  setXhr: function(){
	  		// set with something involving DOMhandler
	  }
	}
})();
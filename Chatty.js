var SolarSystem = (function(){


	function fileLoaded(){
	var data = JSON.parse(this.responseText);
	return data;
	}

	function fileFailed(){
		console.log("failed");
	}

	var messageRequest = new XMLHttpRequest();
	messageRequest.addEventListener("load", fileLoaded);
	messageRequest.addEventListener("error", fileFailed);
	messageRequest.open("GET","boilerplate.json");
	messageRequest.send();
	console.log("messageRequest", messageRequest);


	var boilerplate = [];
	boilerplate.push(data); //push(data).message;


	return {

	  getXhr: function(){
	  		return message;
	  }
	  setXhr: function(){
	  		message // do something;
	  }
	}
})();
//////////////////////////////////MB/////////////////////////////////
////////////////////References and Event Listeners //////////////////

var messageBoard = document.getElementById("container");

// Button references

var postNewMessageButton = document.getElementById("create-message");
var clearAllMessagesButton = document.getElementById("clear-board");

// Textbox references

var userInputTextbox = document.getElementById("input-text");

// Checkbox references

var darkThemeCheckbox = document.getElementById("dark-theme");
var largeTextCheckbox = document.getElementById("large-text");

// Button event listeners

postNewMessageButton.addEventListener("click", function(){
	writeNewMessageToDom();
});

clearAllMessagesButton.addEventListener("click", deleteAllMessages);

// Textbox event listener

userInputTextbox.addEventListener("change", function() {
	console.log("textbox working");
})

// Checkbox event listeners

darkThemeCheckbox.addEventListener("change", function(){
	console.log("dark theme checkbox works");

});

largeTextCheckbox.addEventListener("change", function(){
	console.log("dark theme checkbox works");
});

// Delete single message button listener

document.body.addEventListener("click", deleteSingleCard);

// Enter button

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
	writeNewMessageToDom();
 }
};

// Writing message to Dom

function writeNewMessageToDom() {
	var messageToWrite = "";
		messageToWrite += `<div class="mesageFromUser">`;
		messageToWrite += `<h3> Message: ${userInputTextbox.value} </h3>`;
		messageToWrite += `<button class="deleteButton">Delete</button>`;
		messageToWrite += `</div>`;
		messageBoard.innerHTML += messageToWrite;
};

// Writing PreLoaded messages to Dom

function writeFillerMessageToDom(data){

	for(i=0; i<data.length; i++){

		var fillerToWrite = "";
		fillerToWrite += `<div class="mesageFromUser">`;
		fillerToWrite += `<h3>${data[i].name}</h3>`;
		fillerToWrite += `<p>${data[i].user_message}</p>`;
		fillerToWrite += `<button class="deleteButton">Delete</button>`;
		fillerToWrite += `</div>`;
		messageBoard.innerHTML += fillerToWrite;

	}

}

function deleteAllMessages() {
	messageBoard.innerHTML = "";
};

function deleteSingleCard(e){
	if (e.target.className === "deleteButton"){
		e.target.parentElement.remove();
	};
};


window.addEventListener("load", Chatty.writeXhr);

// messageBoard.innerHTML = Chatty.getXhr();


/////////////////////////////// MB end ///////////////////////////////
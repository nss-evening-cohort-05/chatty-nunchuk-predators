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
	console.log("post message button works");
});

clearAllMessagesButton.addEventListener("click", function(){
	console.log("clear message button works");
});

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

// Enter button

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
 	console.log("enter button works");
	// Chatty.setXhr();
	writeToDom();
 }
};

// Writing message to Dom

function writeToDom() {
	var messageToWrite = "";
		messageToWrite += `<div class="mesageFromUser">`;
		messageToWrite += `<h3> Username: ${userInputTextbox} </h3>`;			// textPlaceHolder needs defining
		messageToWrite += `<button class="deleteButton">Delete</button>`;
		messageToWrite += `</div>`;
		messageBoard.innerHTML += messageToWrite;
};

function deleteAllMessages() {
	messageBoard.innerHTML = "";
};

function deleteSingleCard(e){
	if (e.target.className === "deleteButton"){
		e.target.parentElement.remove();
	};
};

messageBoard.innerHTML = Chatty.getXhr();


/////////////////////////////// MB end ///////////////////////////////
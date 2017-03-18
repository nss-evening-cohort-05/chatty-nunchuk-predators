////////////////////References and Event Listeners //////////////////

var messageBoard = document.getElementById("container");
var postNewMessageButton = document.getElementById("create-message");
var clearAllMessagesButton = document.getElementById("clear-board");
var userInputTextbox = document.getElementById("input-text");
var darkThemeBody = document.getElementsByTagName("body");
var largeThemeMessages = document.getElementsByTagName("p");

// Checkbox references

var darkThemeCheckbox = document.getElementById("dark-theme");
var largeTextCheckbox = document.getElementById("large-text");

postNewMessageButton.addEventListener("click", function(){
	Chatty.writeNewMessageToDom();
});

clearAllMessagesButton.addEventListener("click", deleteAllMessages);

userInputTextbox.addEventListener("change", function() {

})

// Checkbox event listeners

//////////////KC////////////////
///event listener functions on checkboxes ////


darkThemeCheckbox.addEventListener("change", function(){
	if (event.target.checked === true) {
		darkThemeBody[0].classList.add("darkTheme");
	}	else {
		darkThemeBody[0].classList.remove("darkTheme");
	}
});
////////////End KC ////////////

//////////////KC////////////////
largeTextCheckbox.addEventListener("change", function(){
	for (var i=0; i<largeThemeMessages.length; i++){
		if (event.target.checked === true) {
			largeThemeMessages[i].classList.add("largeTextMsg");
		} 
		else {
			largeThemeMessages[i].classList.remove("largeTextMsg");
		}
	}
});

////////////End KC ////////////



document.body.addEventListener("click", deleteSingleCard);

// Enter button

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
	Chatty.writeNewMessageToDom();
 }
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

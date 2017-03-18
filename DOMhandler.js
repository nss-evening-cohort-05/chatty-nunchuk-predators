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

postNewMessageButton.addEventListener("click", passNewMessageThru);

clearAllMessagesButton.addEventListener("click", function() {
	deleteAllMessages();
	clearAllMessagesButton.classList.add("disabled");   
});

userInputTextbox.addEventListener("change", function() {})

//////////////KC////////////////
///event listener functions on checkboxes ////


darkThemeCheckbox.addEventListener("change", function(){
	if (event.target.checked === true) {
		darkThemeBody[0].classList.add("darkTheme");
	}	else {
		darkThemeBody[0].classList.remove("darkTheme");
	}
});

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

document.onkeydown = function() {
    if (window.event.keyCode === 13) {
        passNewMessageThru();
        clearAllMessagesButton.classList.remove("disabled"); 
    }
};

postNewMessageButton.addEventListener("click", function(){
	clearAllMessagesButton.classList.remove("disabled"); 
});

function passNewMessageThru() {
        if (userInputTextbox.value === "") {
            alert("Please type something, silly!")
        } else {
            Chatty.writeNewMessageToArray();
            userInputTextbox.value = "";
            writeNewMessageToDom();
        }
};

function writeFillerMessageToArray(data) {
    for (var i = 0; i < data.length; i++) {
        var fillerToWrite = "";
        fillerToWrite += `<div class="mesageFromUser">`;
        fillerToWrite += `<h3>${data[i].name}</h3>`;
        fillerToWrite += `<p>${data[i].user_message}</p>`;
        fillerToWrite += `<button class="deleteButton">Delete</button>`;
        fillerToWrite += `</div>`;
        messageBoard.innerHTML += fillerToWrite;
    }
};

function writeNewMessageToDom() {
    messageBoard.innerHTML = Chatty.getNewMessageArray(); /// <<----- This line
};

function deleteAllMessages() {
    messageBoard.innerHTML = "";
};

function deleteSingleCard(e) {
    if (e.target.className === "deleteButton") {
        e.target.parentElement.remove();
    };
};

window.addEventListener("load", Chatty.writeXhr);
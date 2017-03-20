//////////////////// REFERENCES //////////////////

var messageBoard = document.getElementById("container");
var postNewMessageButton = document.getElementById("create-message");
var clearAllMessagesButton = document.getElementById("clear-board");
var userInputTextbox = document.getElementById("input-text");
var darkThemeBody = document.getElementsByTagName("body");
var largeThemeMessages = document.getElementsByTagName("p");
var darkThemeCheckbox = document.getElementById("dark-theme");
var largeTextCheckbox = document.getElementById("large-text");
var endFocus = document.getElementById("end-focus");

//////////////////// EVENT LISTENERS //////////////////

window.addEventListener("load", Chatty.writeXhr);
window.addEventListener("load", writeArrayToDom);

document.onkeydown = function() {
    if (window.event.keyCode === 13) {
        onSubmit();
    }
};

postNewMessageButton.addEventListener("click", function(){
    onSubmit();
});

clearAllMessagesButton.addEventListener("click", function() {
    deleteAllMessages();
    clearAllMessagesButton.classList.add("disabled");   
});

userInputTextbox.addEventListener("change", function() {})

darkThemeCheckbox.addEventListener("change", function(){
    if (event.target.checked === true) {
        darkThemeBody[0].classList.add("darkTheme");
    }   else {
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

document.body.addEventListener("click", deleteSingleCard);

//////////////////// FUNCTIONS //////////////////

function onSubmit() {
    if (userInputTextbox.value === "") {
        alert("You must enter some text, silly!");
    } else {
        Chatty.writeNewMessageToArray(userInputTextbox.value); 
        clearAllMessagesButton.classList.remove("disabled"); 
        writeArrayToDom(Chatty.getNewMessageArray());
        userInputTextbox.value = ""
        console.log(endFocus);
        endFocus.scrollIntoView();
    }
};

function writeArrayToDom() {
    var arrayOfMsg = Chatty.getNewMessageArray();
    var domString = "";
    for (var i = 0; i < arrayOfMsg.length; i++) {
        var timestamp = new Date;
        domString += `<div class="mesageFromUser">`;
        domString += `<p>${arrayOfMsg[i]}</p>`;
        domString += `<p class="timestamp">${timestamp}</p>`;
        domString += `<button class="deleteButton btn btn-default">Delete</button>`;
        domString += `<button onclick='responsiveVoice.speak("${arrayOfMsg[i]}");' class='audioplay deleteButton btn btn-default' id='picOnPlayButton'>`;
        domString += `<span class="glyphicon glyphicon-volume-up"></span>`;
        domString += `</button></div>`;
    }
    messageBoard.innerHTML = domString;
};

function writeNewMessageToDom() {
    messageBoard.innerHTML = Chatty.getNewMessageArray();
};

function deleteAllMessages() {
    messageBoard.innerHTML = "";
};

function deleteSingleCard(e) {
    if (e.target.className === "deleteButton btn btn-default") {
        e.target.parentElement.remove();
    };
};



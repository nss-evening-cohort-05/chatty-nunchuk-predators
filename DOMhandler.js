////////////////////References and Event Listeners //////////////////

var messageBoard = document.getElementById("container");
var postNewMessageButton = document.getElementById("create-message");
var clearAllMessagesButton = document.getElementById("clear-board");
var userInputTextbox = document.getElementById("input-text");
var darkThemeCheckbox = document.getElementById("dark-theme");
var largeTextCheckbox = document.getElementById("large-text");

postNewMessageButton.addEventListener("click", passNewMessageThru);

clearAllMessagesButton.addEventListener("click", deleteAllMessages);

userInputTextbox.addEventListener("change", function() {})

darkThemeCheckbox.addEventListener("change", function() {
    console.log("dark theme checkbox works");
});

largeTextCheckbox.addEventListener("change", function() {
    console.log("dark theme checkbox works");
});

document.body.addEventListener("click", deleteSingleCard);

document.onkeydown = function() {
    if (window.event.keyCode === 13) {
        passNewMessageThru();
    }
};

function passNewMessageThru() {
        if (userInputTextbox.value === "") {
            alert("Please type something, silly!")
        } else {
            Chatty.writeNewMessageToDom();
            userInputTextbox.value = "";
        }
}

function writeFillerMessageToDom(data) {
    for (var i = 0; i < data.length; i++) {
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

function deleteSingleCard(e) {
    if (e.target.className === "deleteButton") {
        e.target.parentElement.remove();
    };
};

window.addEventListener("load", Chatty.writeXhr);
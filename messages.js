var Chatty = (function(oldChatty) {

    oldChatty.writeNewMessageToDom = function() {
        var messageToWrite = "";
        messageToWrite += `<div>`;
        messageToWrite += `<h3>Chatty_Cathy01</h3>`;
        messageToWrite += `<p>${userInputTextbox.value}</p>`;
        messageToWrite += `<button class="deleteButton">Delete</button>`;
        messageToWrite += `</div>`;
        messageBoard.innerHTML += messageToWrite;
    };

    return oldChatty;

})(Chatty || {});
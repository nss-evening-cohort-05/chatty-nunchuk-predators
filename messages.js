var Chatty = (function(oldChatty) {

    oldChatty.writeNewMessageToDom = function() {
        var messageToWrite = "";
        messageToWrite += `<div class="mesageFromUser">`;
        messageToWrite += `<h3> Message: ${userInputTextbox.value} </h3>`;
        messageToWrite += `<button class="deleteButton">Delete</button>`;
        messageToWrite += `</div>`;
        messageBoard.innerHTML += messageToWrite;
    };

    return oldChatty;

})(Chatty || {});
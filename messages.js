var Chatty = (function(oldChatty) {

    oldChatty.writeNewMessageToDom = function() {
        var messageToWrite = "";
        messageToWrite += `<div class="mesageFromUser">`;
        messageToWrite += `<h3>${data[i].name}</h3>`;
        messageToWrite += `<p>${userInputTextbox.value}</p>`;
        messageToWrite += `<button class="deleteButton">Delete</button>`;
        messageToWrite += `</div>`;
        messageBoard.innerHTML += messageToWrite;
    };

    return oldChatty;

})(Chatty || {});
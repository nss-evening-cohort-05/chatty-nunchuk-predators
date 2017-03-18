var Chatty = (function(oldChatty) {

    var privateMessageArray = [];

    oldChatty.getNewMessageArray = function() {
        return privateMessageArray;
    }

    oldChatty.writeNewMessageToArray = function() {
        var messageToWrite = "";
        messageToWrite += `<div class="mesageFromUser">`;
        messageToWrite += `<h3>Chatty_Cathy01</h3>`;
        messageToWrite += `<p>${userInputTextbox.value}</p>`;
        messageToWrite += `<button class="deleteButton">Delete</button>`;
        messageToWrite += `</div>`;
        privateMessageArray.push(messageToWrite);
        console.log("privateMessageArray", privateMessageArray);
    };

    return oldChatty;

})(Chatty || {});
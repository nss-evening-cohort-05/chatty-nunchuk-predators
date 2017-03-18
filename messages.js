var Chatty = (function(oldChatty) {

    var privateMessageArray = [];
    oldChatty.getNewMessageArray = function() {
        return privateMessageArray;
    }

    oldChatty.writeNewMessageToArray = function(messageToWrite) {
        privateMessageArray.push(messageToWrite);
        console.log("privateMessageArray", privateMessageArray);
    };
 oldChatty.writeNewMessageToArray();
    return oldChatty;

})(Chatty || {});


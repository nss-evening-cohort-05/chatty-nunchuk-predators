# Chatty Group Project


## Assignment

#### The "chatty" assignment is an in class, group project that is designed to help us expand our knowledge and experience working collaboratively. This main focus of the assignment is to review the information from our last two milestones, The-Static-Web” and the current “Single-Page-Apps” and combine that knowledge into a working web chatroom. 




## Criteria

##### Trello Board Creation

We had to create a trello board and plan out and assign all aspects of the project. This was immensely help to "visualize" the assignment and make sure to see the projects scope from beginning to end. 


here is a link to the our Trello 

##### Navigation bar

1. Create an element to serve as the navigation bar for your application.
1. Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine.
1. Create a input field for a user to enter in a message.
1. Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
1. When return key is detected, you'll create a new message (*see details below*).
1. Create a button to clear all messages.
1. When the user clicks the clear messages button, all current chat messages should be removed from the application.
1. If there are no messages, then the clear messages button should be disabled (*see example above*).
1. The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.


##### Checkbox Options

1. Create two checkboxes below the message input field. One labeled "Dark theme" and the other labeled "Large text".
1. When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
1. If the user unchecks the box, the background color should change back to white with black text for messages.


##### Messages 

1. When the page is first loaded, you must load 5 messages from a local JSON file and pre-fill a message area `<div>` below the input field that will also hold all new messages as they get created.
1. When the user presses the return key in the message field, the new message should be inserted into the message area.
1. The message should have a button displayed after it with the text "Delete" inside of it.
1. When the delete button next to a message is clicked, only that message should be removed from the DOM.

##### Modular Code

Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be `Chatty`.

1. One IIFE should load the JSON file and returns the array of objects.
1. One IIFE should contain a function that accepts an element `id`, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should also expose a function to read all messages, and delete a single message.
1. One IIFE should accept a message element `id` and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.



// let userInput = document.getElementById('thingToDo'); //stores user's input
// let hitSubmit = document.getElementById('submit'); //stores when user hits submit? or just stores button? dunno
// const submitBtn = add userInput to <h1>To Do</h1><ul><li>
//
// document.forms.toDoForm
//now make submit button, or enter key capture userInput;

//then add the submission to an array;

// function addUserInput() {
//   document.getElementById('demo').innerHTML = userInput;
//}

//make submit button work
//capture user's input in a variable
//add that variable to an array per homework instructions
//have the item in the array show as a <li> in todo list
//wash and repeat
//maybe create a li on click

//Now that I have the user todo printing to the h2,
//figure out how to add the user todo to an array.
//each time the user adds a todo, add another li
//immediately invoked function expression aka IIFE;
(function() {
  let userInput = document.getElementById('thingToDo'); //this only returns the element, not what user types
  let form = document.getElementById('toDoForm');
  let ul = document.getElementById('todoList');
  let li = document.createElement('li');

  form.addEventListener('submit', e => {
    e.preventDefault(); //stops form from being sent according to my book.
    let userInput = thingToDo.value;
    // let msg = 'Welcome ' + userInput;
    // document.getElementById('theH2').textContent = msg;
    ul.appendChild(li);
    li.appendChild(document.createTextNode(userInput));
  });
})();

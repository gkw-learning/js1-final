// let userInput = document.getElementById('thingTodo'); //stores user's input
// let hitSubmit = document.getElementById('submit'); //stores when user hits submit? or just stores button? dunno
// const submitBtn = add userInput to <h1>To Do</h1><ul><li>
//
// document.forms.TodoForm
//now make submit button, or enter key capture userInput;

//then add the submission to an array;

// function addUserInput() {
//   document.getElementById('demo').innerHTML = userInput;
//}

//make submit button work
//capture user's input in a variable
//add that variable to an array per homework instructions
//have the item in the array show as a <li> in Todo list
//wash and repeat
//maybe create a li on click

//Now that I have the user Todo printing to the h2,
//figure out how to add the user Todo to an array.
//each time the user adds a Todo, add another li
//immediately invoked function expression aka IIFE;
(function() {
  let userInput = document.getElementById('thingTodo'); //this only returns the element, not what user types
  let form = document.getElementById('todoForm');
  let arrayOfTodos = [];

  form.addEventListener('submit', e => {
    e.preventDefault(); //stops form from being sent according to my book.
    let userInput = thingTodo.value; //returns the value of what user types
    let liNode = document.createElement('li'); //creating li node. must be local scope.
    let textNode = document.createTextNode(userInput);
    liNode.appendChild(textNode);
    document.getElementById('todoList').appendChild(liNode);
    let push = arrayOfTodos.push(textNode);
    console.log(arrayOfTodos);
  });
})();

// (function() {
//   let userInput = document.getElementById('thingTodo').value; //this only returns the element, not what user types
//   let form = document.getElementById('todoForm');
//   let ul = document.getElementById('todoList');
//   let node = document.createElement('li');
//   let textNode = document.createTextNode(userInput);
//   let arrayOfTodos = [];
//
//   form.addEventListener('submit', e => {
//     e.preventDefault(); //stops form from being sent according to my book.
//     // let userInput = thingTodo.value;
//     node.appendChild(textNode);
//     document.getElementById('todoList').appendChild(node);
//     //let item = ul.appendChild(li);
//     //let push = arrayOfTodos.push(item);
//     console.log(arrayOfTodos);
//   });
// })();

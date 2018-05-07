// // //immediately invoked function expression aka IIFE;
// function addTodo() {
//   let userInput = document.getElementById('thingTodo'); //this only returns the element, not what user types
//   let form = document.getElementById('todoForm');
//   let arrayOfTodos = [];
//   form.addEventListener('submit' || 'keydown', e => {
//     e.preventDefault(); //stops form from being sent according to my book.
//     let userInput = thingTodo.value; //returns the value of what user types
//     let liNode = document.createElement('li'); //creating li node. must be local scope.
//     let textNode = document.createTextNode(userInput);
//     liNode.appendChild(textNode);
//     document.getElementById('todoList').appendChild(liNode);
//     let push = arrayOfTodos.push(textNode);
//     console.log(arrayOfTodos);
//   });
// }
//
// addTodo();

//immediately invoked function expression aka IIFE;
(function() {
  let userInput = document.getElementById('thingTodo'); //this only returns the element, not what user types
  let form = document.getElementById('todoForm');
  let arrayOfTodos = [];
  form.addEventListener(
    'submit' || 'keydown',
    e => {
      e.preventDefault();
      let userInput = thingTodo.value; //returns the value of what user types
      let liNode = document.createElement('li'); //creating li node. must be local scope.
      let textNode = document.createTextNode(userInput);
      liNode.appendChild(textNode);
      document.getElementById('todoList').appendChild(liNode);
      let push = arrayOfTodos.push(textNode);
      console.log(arrayOfTodos);
    },
    false
  );
})();

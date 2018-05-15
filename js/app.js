// function test() {
// let userInput = document.getElementById('thingTodo'); //this only returns the element, not what user types
//   let form = document.getElementById('todoForm');
//   let arrayOfTodos = [];
//   form.addEventListener(
//     'submit' || 'keydown',
//     e => {
//       e.preventDefault();
//       let userInput = thingTodo.value; //returns the value of what user types
//       let liNode = document.createElement('li'); //creating li node. must be local scope.
//       let textNode = document.createTextNode(userInput);
//       liNode.appendChild(textNode);
//       document.getElementById('todoList').appendChild(liNode);
//       let push = arrayOfTodos.push(textNode);
//       console.log(arrayOfTodos);
//       userInput = thingTodo.value = ''; //clears form after hit submit
//     },
//     false
//   );
// }
//
// test();
/******* Let's try constructor function *********
/* maybe dom elements can take place of default values */
// create a constructor function that makes a new Obj using
// the input todoForm

let form = document.getElementById('todoForm');
let arrayOfTasks = [];
// let userAnswer = document.getElementById('thingTodo'); //doesnt seem like i need this?
function createTask() {
  form.addEventListener(
    'submit' || 'keydown',
    e => {
      e.preventDefault();
      let userTask;
      userTask = thingTodo.value;
      //creating new function by using the constructor function, AddNewTask
      let newTask = new AddNewTask(userTask);
      arrayOfTasks.push(newTask);
      console.log('check it', arrayOfTasks);
      //assign empty string to clear input form after submit clicked
      userTask = thingTodo.value = '';
    },
    false
  );
}
createTask();

//the constructor function
function AddNewTask(userTask) {
  this.userTask = userTask;
}

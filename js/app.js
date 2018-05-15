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
let usersArray = [];
// let userAnswer = document.getElementById('thingTodo'); //doesnt seem like i need this?
function test() {
  form.addEventListener(
    'submit' || 'keydown',
    e => {
      e.preventDefault();
      let storeAnswer;
      storeAnswer = userAnswer = thingTodo.value;
      console.log(
        'if this shows in the console, youre doing it wrong',
        storeAnswer
      );
      userAnswer = thingTodo.value = '';
      let newTodo = new Test('testing');
      usersArray.push(newTodo);
      console.log('check it', usersArray);
    },
    false
  );
}

test();
// console.log('if this shows in the console, youre doing it right', storeAnswer);

function Test(storeAnswer) {
  this.storeAnswer = storeAnswer;
}

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

// let radioOnInput = document.getElementsByTagName('input');
// console.log(radioOnInput);
// let radio = document.getElementById('rank');
// console.log(radio);

// let radioOnInput = document.querySelectorAll('input#rank');
// console.log(radioOnInput);
// for(let i = 0; i < radioOnInput.length; i++) {
//   radioOnInput[i].
// }

let form = document.getElementById('todoForm');
let submitBtn = document.getElementById('submit');
let radioBtn = document.getElementById('rank');
//i want to listen to an event on radio button for when it changes, then remove disabled from the submit
let arrayOfTasks = [];

function createTask() {
  let radioOnInput = document.querySelectorAll('input#rank'); //grabs all inputs with id #rank
  for (let i = 0; i < radioOnInput.length; i++) {
    //loops through lenght of radioInput, whichever is selected canges submit color
    radioOnInput[i].addEventListener('change', e => {
      //listens for change on any radio
      e.preventDefault();
      submitBtn.style.backgroundColor = '#51cc7a'; //changes color of submit text
      submitBtn.removeAttribute('disabled');
    });
  }

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

      let liNode = document.createElement('li'); //creating li node. must be local scope.
      let textNode = document.createTextNode(userTask); //grabs value from userTask key
      liNode.appendChild(textNode); //adds value from userTask to <li>
      document.getElementById('todoList').appendChild(liNode); //appends the <li> to the <ul>
      userTask = thingTodo.value = ''; //assign empty string to clear input form after submit clicked
    },
    false
  );
}
createTask();
// // function isChecked() {
// //   radio.addEventListener(if radio is checked){
// //     then change button from grey to green and make it click able.
// //   };
// // }
//the constructor function
function AddNewTask(userTask) {
  this.userTask = userTask;
}

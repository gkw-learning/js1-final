let form = document.getElementById('todoForm');
let submitBtn = document.getElementById('submit');
let radioBtn = document.getElementById('rank');
let arrayOfTasks = [];

function createTask() {
  let radioOnInput = document.querySelectorAll('input#rank'); //grabs all inputs with id #rank
  //loops through length of radioOnInput, whichever is selected canges submit color
  for (let i = 0; i < radioOnInput.length; i++) {
    //listens for change on any radio
    radioOnInput[i].addEventListener('change', e => {
      e.preventDefault();
      submitBtn.style.backgroundColor = '#51cc7a'; //changes color of submit text
      submitBtn.removeAttribute('disabled'); //removes the disabled attribute on submit
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

function AddNewTask(userTask) {
  this.userTask = userTask;
}

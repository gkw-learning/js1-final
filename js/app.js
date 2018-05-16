let form = document.getElementById('todoForm');
let submitBtn = document.getElementById('submit');
let radioBtn = document.getElementById('rank');

let arrayOfTasks = [];

function createTask() {
  let radioOnInput = document.querySelectorAll('input#rank'); //grabs all inputs with id #rank
  let rank; //exposes value of rank within the for loop to the constructor function
  //loops through length of radioOnInput, whichever is selected canges submit color
  for (let i = 0; i < radioOnInput.length; i++) {
    //listens for change on any radio
    let x = radioOnInput[i].addEventListener('change', e => {
      e.preventDefault();
      submitBtn.style.backgroundColor = '#51cc7a'; //changes color of submit text
      submitBtn.removeAttribute('disabled'); //removes the disabled attribute on submit
      x = radioOnInput[i];
      rank = x.value; //stores the rank/priority user assigns to task
      console.log(rank);
    });
  }
  form.addEventListener(
    'submit' || 'keydown',
    e => {
      e.preventDefault();
      // let task;
      let task = thingTodo.value; // stores the task typed by user

      //creating new function by using the constructor function, AddNewTask
      let newTask = new AddNewTask(task, rank);
      console.log('this should be ranked', arrayOfTasks);

      let liNode = document.createElement('li'); //creating li node. must be local scope.
      let textNode = document.createTextNode(task); //grabs value from task key
      let todoList = document.getElementById('todoList');
      let green = document.getElementById('green');
      if (newTask.rank === '1') {
        liNode.appendChild(textNode); //adds value from task to <li>
        todoList.appendChild(liNode); //appends the <li> to the <ul>
      } else {
        liNode.appendChild(textNode); //adds value from task to <li>
        green.appendChild(liNode); //appends the <li> to the <ul>
      }

      // // placee if statement here so liNode is defined
      // let li;
      // let text;
      // let red;
      // let green;
      // if (newTask.rank === '3') {
      //   li = document.createElement('li'); //creating li node. must be local scope.
      //   text = document.createTextNode(task); //grabs value from task key
      //   li.appendChild(text); //adds value from task to <li>
      //   document.getElementById('red').appendChild(li); //appends the <li> to the <ul>
      // } else if (newTask.rank === '1') {
      //   li.appendChild(text); //adds value from task to <li>
      //   document.getElementById('green').appendChild(li); //appends the <li> to the <ul>
      // }

      //does not splice correctly
      if (newTask.rank === '1') {
        arrayOfTasks.unshift(newTask);
        liNode.style.color = 'red';
      } else if (newTask.rank === '3') {
        liNode.style.color = 'green';
        arrayOfTasks.push(newTask);
      } else {
        let index;
        for (let j = 0; j < arrayOfTasks.length; j++) {
          index = arrayOfTasks[j].rank === '3';
        }
        liNode.style.color = 'orange';
        arrayOfTasks.splice(index, 0, newTask);
      }

      form.reset();
    },
    false
  );
}

createTask();

function AddNewTask(task, rank) {
  this.task = task;
  this.rank = rank;
}

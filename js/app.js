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
      //if value="high" unshift() answer to beginning of array;
      // arrayOfTasks.push(newTask);
      console.log('check it part2', newTask.rank);
      if (newTask.rank === 'high') {
        arrayOfTasks.unshift(newTask);
      } else {
        arrayOfTasks.push(newTask);
      }
      console.log('this should be ranked', arrayOfTasks);

      let liNode = document.createElement('li'); //creating li node. must be local scope.
      let textNode = document.createTextNode(task); //grabs value from task key
      liNode.appendChild(textNode); //adds value from task to <li>
      document.getElementById('todoList').appendChild(liNode); //appends the <li> to the <ul>
      // function findPriority() {
      //   for (let i = 0; i < arrayOfTasks.length; i++) {
      //     let rankStatus = arrayOfTasks[i][1];
      //     if (rankStatus === 'high') {
      //       arrayOfTasks.unshift(rankStatus);
      //     } else if (rankStatus === 'low') {
      //       arrayOfTasks.push(rankStatus);
      //     } else {
      //       console.log('not there yet');
      //     }
      //     console.log(arrayOfTasks[i][1]);
      //   }
      // }
      // findPriority();
      form.reset(); //only resets radios and input, not submit
    },
    false
  );
}

createTask();

function AddNewTask(task, rank) {
  this.task = task;
  this.rank = rank;
}

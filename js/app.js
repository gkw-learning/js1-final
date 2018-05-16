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
      let fake = document.getElementsByTagName('li');
      let task = thingTodo.value; // stores the task typed by user

      //creating new function by using the constructor function, AddNewTask
      let newTask = new AddNewTask(task, rank);
      console.log('this should be ranked', arrayOfTasks);

      let liNode = document.createElement('li'); //creating li node. must be local scope.
      let textNode = document.createTextNode(task); //grabs value from task key
      liNode.appendChild(textNode); //adds value from task to <li>
      document.getElementById('todoList').appendChild(liNode); //appends the <li> to the <ul>
      // placee if statement here so liNode is defined
      // let lowRank;

      // let j = 0;
      // while (j < arrayOfTasks.length) {
      //   j++;
      //   if (arrayOfTasks[j].rank === '3') {
      //     index = j;
      //   }
      // }
      //adding ranked tasks to array accordingly and color coding

      // let index;
      // let j;
      // for (j = 0; j < arrayOfTasks.length; j++) {
      //   if (arrayOfTasks[j][1].rank === '2') {
      //     console.log('wuutt', arrayOfTasks[j].rank === '2');
      //   }
      // }

      // let j;
      // console.log('this is newTask', newTask);
      // console.log('this is arrayOfTasks', arrayOfTasks);
      // let accessArray = newTask.rank;
      // console.log('trying to get rank ', accessArray);

      if (newTask.rank === '1') {
        arrayOfTasks.unshift(newTask);
        liNode.style.color = 'red';
      } else if (newTask.rank === '3') {
        liNode.style.color = 'green';
        arrayOfTasks.push(newTask);
      } else {
        // let index = newTask.rank < 3 && newTask.rank > 1;
        let index;
        for (let j = 0; j < arrayOfTasks.length; j++) {
          index = arrayOfTasks[j].rank === '3';
        }
        liNode.style.color = 'orange';
        arrayOfTasks.splice(index, 0, newTask);
      }

      // let index;
      // for (let j = 0; j < arrayOfTasks.length; j++) {
      //   index = arrayOfTasks[j].rank;
      //   if (newTask.rank === '2') {
      //     arrayOfTasks.splice(index, 0, newTask);
      //     liNode.style.color = 'orange';
      //   } else if (newTask.rank === '3') {
      //     arrayOfTasks.push(newTask);
      //     liNode.style.color = '#51cc7a';
      //   } else {
      //     arrayOfTasks.unshift(newTask);
      //     liNode.style.color = 'red';
      //   }
      // }
      // console.log('check', index);
      //
      form.reset();

      // console.log('let us see what the array looks like', arrayOfTasks);
      // let getSorted = arrayOfTasks.sort();
      // console.log(getSorted);
      // let li = document.createElement('li');
      // let text = document.createTextNode(task);
      // li.appendChild(text);
      // document.getElementById('test').appendChild(li);

      //only resets radios and input, not submit
    },
    false
  );
}

createTask();

function AddNewTask(task, rank) {
  this.task = task;
  this.rank = rank;
}

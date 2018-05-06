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

// theH3.addEventListener('mouseover', e => {
//   theH3.textContent = `in case you forgot, we're converting from ${numifyTemp} ${scale}`; //add some text content
// });

//immediately invoked function expression;
(function() {
  let userInput = document.getElementById('thingToDo'); //this only returns the element, not what user types
  var form = document.getElementById('toDoForm');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // let elements = this.elements; //selects all form elements
    let userInput = thingToDo.value;
    let msg = 'Welcome ' + userInput;
    document.getElementById('theH2').textContent = msg;
  });
})();

var arr = []

function add(){
  var item = prompt("What name would you like to add? ");
  arr.push(item);
  console.log(arr);
}
function remove(){
  var item = prompt("What name would you like to add? ");
  arr.pop(item);
  console.log(arr);
}
function display(){
  console.log(arr);
}
function quit(){
  alert("Thanks for using the Web App! Please refresh the page to start over.");
}

var operation = "none";
var initial = prompt("Would you like to start the roster web app? y/n");
if(initial == 'y'){
  while (operation!="quit") {
    var operation = prompt("Please select an action: add, remove, display, or quit.");
    if(operation == "add"){
      add()
    }
    else if (operation == "remove") {
      remove()
    }
    else if (operation == "display") {
      display()
    }
  }
}
else{
  alert("Thanks for using the Web App! Please refresh the page to start over.");
}

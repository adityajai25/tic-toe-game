var fname = prompt("Hello and Welcome. Please enter your first name:");
var lname = prompt("Please enter your Last Name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var pname = prompt("What is the name of your pet?");
alert("Thank you so much for the information.");
if((fname[0]==lname[0]) && (20<age<30) && (height>170) && (pname[pname.length-1]=="y")){
  console.log("The person is a Spy");
}
else{
  console.log("nothing to see, tata bye bye");
}

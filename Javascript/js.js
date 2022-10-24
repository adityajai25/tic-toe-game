// alert("Hello there, Welcome to conversion");
// input = prompt("Enter the weight in Pounds");
// inkg = alert(input+" pounds is equal to "+input*0.45+" kilograms");
// alert("Thankyou for using our calculator");
console.log("Converted Successfully");

// Exercise solutions
var str="hello"
var num =0;
while (num<5) {
  console.log(str+"\n");
  num++;
}
for(var i=0;i<str.length;i++){
  console.log(str+"\n");
}

// Exercise 2 solution print odd numbers till 25
console.log("Using While loop");
var num = 0;
while (num<26) {
  if (num%2!=0) {
    console.log(num);
  }
  num++;
}
console.log("Using for loop");
for(var i = 0;i<26;i++){
  if (i%2!=0) {
    console.log(i);
  }
}

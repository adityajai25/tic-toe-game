var one = document.querySelector('#one')
var two = document.querySelector("#two")
var three = document.querySelector("#three")

one.addEventListener('mouseover',function(){
  one.textContent = "Mouse is over the text";
  one.style.color = "Red";
})
one.addEventListener('mouseout',function(){
  one.textContent = "Hover";
  one.style.color = "Black";
})
two.addEventListener('click',function(){
  two.textContent = "Clicked";
  two.style.color = "Blue";
})
three.addEventListener('dblclick',function(){
  three.textContent = "Double Clicked";
  three.style.color = "Purple";
})

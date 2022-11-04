var restart = document.querySelector('#res');
var squares = document.querySelectorAll('td');
// for  clearing all boxed restarting
function clearBox() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBox);

var m, n;
function history() {
  var done = JSON.parse(localStorage.getItem('comp'))
  for (n = 0; n < done.length; n++) {
    var targ = document.getElementById('ul-2');
    var Li = document.createElement('li');
    Li.setAttribute("class", "collection-item teal lighten-2 cls8");
    Li.innerText = done[n].title;
    var span = document.createElement('span');
    span.setAttribute("class", "secondary-content cls9");
    span.innerHTML = "<i class='fas fa-trash black-text' title='Delete' onclick='remov(m)' ></i>"
    Li.appendChild(span);
    targ.appendChild(Li);
  }
}
window.onload = history(); placeholder();
function remov(k) {
  window.location.reload();
  var done = JSON.parse(localStorage.getItem('comp'));
  (done.splice(k, 1));
  localStorage.setItem('comp', JSON.stringify(done));
}
function clearall() {
  var donen = [];
  localStorage.setItem('comp', JSON.stringify(donen));
  window.location.reload();
}   
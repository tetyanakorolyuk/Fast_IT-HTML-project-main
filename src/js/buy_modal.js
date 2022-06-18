var modal = document.getElementById('myModalBuy');
var btndesk = document.getElementById('myBtnBuy');
var btnmob = document.getElementById('myBtnBuyMob');
var btnclose = document.getElementsByClassName('close')[0];
btnclose.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
function myModalBuy() {
  modal.style.display = 'block';
}
btndesk.onclick = myModalBuy;
btnmob.onclick = myModalBuy;
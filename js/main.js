const closeBar = document.getElementById('ship_close');
const shipDiv = document.getElementById('ship-close-info');
const shipContain = document.getElementsByClassName('ship-info-container');
const hide = document.getElementById('hide');
closeBar.onclick = () => {
  hide.style.display = 'none';
}

var closed = true;

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  closed = false;
}

/* Set the width of the side navigation to 17px */
function closeNav() {
  document.getElementById("mySidenav").style.width = "17px";
  closed = true;
}

/* Open or close sidenav after clicked */
function clickNav() {
  if (closed) {
    openNav()
  } else {
    closeNav()
  }
}

/* Video popup */
$(document).ready(function() {
  $('#headerVideoLink').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });         
});
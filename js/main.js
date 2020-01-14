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
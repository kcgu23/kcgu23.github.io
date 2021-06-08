/** SIDEBAR */

var closed = true;

// Set the width of the side navigation to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  closed = false;
}

// Set the width of the side navigation to 17px
function closeNav() {
  document.getElementById("mySidenav").style.width = "17px";
  closed = true;
}

// Open or close sidenav after clicked
function clickNav() {
  if (closed) {
    openNav()
  } else {
    closeNav()
  }
}

/** HEADER */

// When the user scrolls the page, make the header sticky
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    if (500 > window.pageYOffset && window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        header.style.marginTop = window.pageYOffset;
    }
}
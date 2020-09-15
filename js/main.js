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
function onVideoClick(theLink) {
    document.getElementById("video_pop").innerHTML = "<video autoplay muted loop id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/webm\"></video>";
    document.getElementById("video_pop").style.display="block";
} 

function onPopClick() {
    document.getElementById("video_pop").style.display="none";
    document.getElementById("video_pop").innerHTML = ""; 
}         

var element = document.getElementById("video_pop");

element.onclick = (function (onclick) {
  return function(evt) {
    evt  = evt || event;

    if (onclick) {
      onclick(evt);
    }
     if (evt.target == element) { element.style.display="none"; } 
  }
})(element.onclick);
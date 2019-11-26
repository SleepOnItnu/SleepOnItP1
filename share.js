var shareform = document.getElementById("shareform");

// Get the button that opens the modal
var btn = document.getElementById("share-button");

// Get the <span> element that confirms the modal
var confirm = document.getElementsByClassName("confirm")[0];

var success = document.getElementById("successfullyshared");

// When the user clicks the button, open the modal
btn.onclick = function() {
  shareform.style.display = "block";
}

// When the user clicks on <span> (x), confirm the modal
confirm.onclick = function() {
  shareform.style.display = "none";
  success.style.display = "block"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == shareform) {
    shareform.style.display = "none";
  }
  if (event.target == success) {
    success.style.display = "none";
  }
}

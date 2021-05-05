function koopProduct(productName) {
  alert("Je hebt het product (" + productName + ") in je winkelmandje gedaan.");
}

var modal = document.getElementsByClassName('modal');
var modalButton = document.getElementsByClassName("modal-button");
var closeButton = document.getElementsByClassName("closeButton");

modalButton[0].onclick = function() {
  console.log("button click");
    modal[0].style.display = "block";
}
modalButton[1].onclick = function() {
    modal[1].style.display = "block";
}
modalButton[2].onclick = function() {
    modal[2].style.display = "block";
}


closeButton[0].onclick = function() {
    modal[0].style.display = "none";
}
closeButton[1].onclick = function() {
    modal[1].style.display = "none";
}
closeButton[2].onclick = function() {
    modal[2].style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     }
    if (event.target == modal[1]) {
         modal[1].style.display = "none";
     }
    if (event.target == modal[2]) {
         modal[2].style.display = "none";
     }
}

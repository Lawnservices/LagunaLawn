 function myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
 }

 function setup() {
     var textInput;
     textInput = document.getElementById('username');
     textInput.focus();
     textInput = document.getElementById('enviar');
 }
 window.addEventListener('load', setup, false);
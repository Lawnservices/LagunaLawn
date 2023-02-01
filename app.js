  function myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
 }

 function laguna() {
     document.getElementById("col").style.backgroundColor = "#0366";
     document.getElementById("boton1").style.display = "none";
     document.getElementById("boton2").style.display = "block";
   document.getElementById("myTopnav").style.backgroundColor = "#0366b6";
     document.getElementById("mnbv").innerHTML = "Thanks for visiting us.";
 }

 function lagunas() {
     document.getElementById("col").style.backgroundColor = "#fff";
     document.getElementById("boton1").style.display = "block";
     document.getElementById("boton2").style.display = "none";
 }

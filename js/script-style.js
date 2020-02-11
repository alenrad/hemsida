/* Man hämtar Id'n i navnav som gör att man kan ändra dess funktion sen */
navnavmargin = document.getElementById("navnav").style.marginLeft;

/* När man klickar på knappen och "sidebar" är stängd så får man upp den igen */
function openNav() {
  document.getElementById("sidebar").style.display = "block";
  console.log("I called this function!")
  document.getElementById("navnav").style.marginLeft = navnavmargin;
}

/* När man klickar så stängs saken med closeNav ned (sidebar) */
function closeNav() {
  document.getElementById("sidebar").style.display = "none";
  console.log("I called this function!")
  document.getElementById("navnav").style.marginLeft = "0";
}

/* Skapar en pop-up kommentar som säger "..." när man klickar på knappen med myFunction */
function myFunction() {
  alert("Den här funktionen fungerar ej just nu");
}

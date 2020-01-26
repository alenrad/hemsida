navnavmargin = document.getElementById("navnav").style.marginLeft;

function openNav() {
  document.getElementById("sidebar").style.display = "block";
  console.log("I called this function!")
  document.getElementById("navnav").style.marginLeft = navnavmargin;
}

function closeNav() {
  document.getElementById("sidebar").style.display = "none";
  console.log("I called this function!")
  document.getElementById("navnav").style.marginLeft = "0";
}

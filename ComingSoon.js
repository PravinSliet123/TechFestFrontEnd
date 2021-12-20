var navbarMenu = document.querySelector(".sidemenu");
function navbarMenutoggle(){
    navbarMenu.classList.toggle("sidemenuheight");

}



// gallery part ConvolverNode.apply..............

// manue code herer..........


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mainMenu").style.marginright = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainMenu").style.marginleft = "0";
  }
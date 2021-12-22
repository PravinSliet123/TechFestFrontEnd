var navbarMenu = document.querySelector(".sidemenu");
function navbarMenutoggle(){
    navbarMenu.classList.toggle("sidemenuheight");

}



// gallery part code is herer...............

// manue code herer..........


function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mainMenu").style.marginright = "200px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainMenu").style.marginleft = "0";
  }
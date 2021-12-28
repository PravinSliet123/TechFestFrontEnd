const emailAddBtn = document.getElementById("btn");

async function onEmailAddBtnClick() {
  const value = document.getElementById("email").value;
  const params = {
    method: "post",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ email: value }),
  };

  await fetch("https://techfest2022sliet.herokuapp.com/storeEmail", params)
    .then((res) => {
      if (res.status == 200) {
        alert(
          "Thank you for subscribing to Techfest. We will send you updates on your email"
        );
      } else if (res.status == 204) {
        alert("The email already exists.");
      } else {
        alert("Some error occurred. Please try again");
      }
    })
    .catch((err) => {
      alert("Some error occurred. Please try again");
    });
}

var navbarMenu = document.querySelector(".sidemenu");
function navbarMenutoggle() {
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





// code for active tags.....................

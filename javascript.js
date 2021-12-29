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

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  loop: true,
  merge: true,
  scroll: true,
  nav: true,
  autoplay: true,
  smartSpeed: 600,
  autoplaySpeed: 1000,
  center: true,
  dots: false,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          nav: true,
          loop: true,
          center: true,
      },
      700: {
          items: 2,
          nav: true,
          loop: true,
          center: true,
      },
      1000: {
          items: 3,
          nav: true,
          loop: true,
          center: true,
      }
  }
})

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

var myDIV = document.getElementById("myDIV");
if (myDIV != null) {
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName('Active');
            current[0].className = current[0].className.replace(' Active', '');
            this.className += ' Active';
        });
    }
}








// footer code is here...............

$(window).scroll(function (event) {
  function footer() {
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
          $(".footer ").fadeIn("slow ").removeClass("show ");
      } else {
          $(".footer ").fadeOut("slow ").removeClass("show ");
      }

      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function () {
          if ($('.footer').is(':hover')) {
              footer();
          } else {
              $(".footer ").fadeOut("slow ");
          }
      }, 2000));
  }
  footer();
});
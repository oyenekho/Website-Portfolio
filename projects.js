function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);




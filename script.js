function sidebarHandler(){
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#menubar");
    const sidebar = document.querySelector("#aside");
    const closeBtn = document.querySelector("#close");
    const links = document.querySelectorAll("#aside nav ul li a");
    menuIcon.addEventListener("click", function () {
      console.log("Menu clicked");
      if (sidebar.style.left === "-100%" || sidebar.style.left === "") {
        sidebar.style.left = "0";
      } else {
        sidebar.style.left = "-100%";
      }
    });
    closeBtn.addEventListener("click", function () {
      console.log("Close clicked");
      sidebar.style.left = "-100%";
    });
    links.forEach((link) => {
      link.addEventListener("click", function () {
        console.log("Link clicked");
        sidebar.style.left = "-100%";
      });
    });
  });  
}
sidebarHandler();
function downloadresume(){
  document.getElementById("resume-d").click();
}
function gotogithub(){
  document.getElementById("github").click();
}
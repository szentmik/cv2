var icon = document.querySelector("#menu-icon");
var menuModal = document.querySelector("#menu-modal");

// Show the menu

function showModal() {
    menuModal.classList.toggle("showMeMenu");

    icon.classList.add("rotate-item");
    setTimeout(function() {
      icon.classList.remove("rotate-item");}, 310);

}

// Icon Change

icon.addEventListener("click" , function(event){
  var class2 = event.target.classList[1];
  var iconChange = icon.classList;

  if (class2 === "fa-bars") {
    iconChange.replace("fa-bars", "fa-times");
  }
  else {
    iconChange.replace("fa-times", "fa-bars");
  }
  console.log(class2);
});

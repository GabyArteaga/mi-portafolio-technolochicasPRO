const showMenuButton = document.getElementById("show-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const menuDialog = document.getElementById("menu-dialog");

showMenuButton.addEventListener("click", () => {
  menuDialog.showModal();
});

closeMenuButton.addEventListener("click", () => {
  menuDialog.close();
});

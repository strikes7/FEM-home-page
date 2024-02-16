window.onload = initialSetup();

function initialSetup() {
  selectElements();
}

function selectElements() {
  const openMenu = document.getElementById("main-menu__open-button");
  openMenu.addEventListener("click", () => {
    openMenu.setAttribute("aria-expanded", true);
  });

  const closeMenu = document.getElementById("main-menu__close-button");
  closeMenu.addEventListener("click", () => {
    openMenu.setAttribute("aria-expanded", false);
  });
}

export function closeMobileMenu(mobileMenu) {
  mobileMenu.classList.remove("block");
  mobileMenu.classList.add("hidden");
}

export function openMobileMenu(mobileMenu) {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("block");
}

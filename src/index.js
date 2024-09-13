import { closeMobileMenu, openMobileMenu } from "./js/helpers/sidebar";
import {
  processChangeThemeMode,
  processInitialThemeMode,
} from "./js/helpers/theme";

const main = () => {
  // dark/light theme mode feature
  processInitialThemeMode();

  const darkThemeButtons = [
    ...document.querySelectorAll("[data-theme-button='dark']"),
  ];
  const lightThemeButtons = [
    ...document.querySelectorAll("[data-theme-button='light']"),
  ];

  darkThemeButtons.forEach((btn) =>
    btn.addEventListener("click", () => processChangeThemeMode("dark")),
  );
  lightThemeButtons.forEach((btn) =>
    btn.addEventListener("click", () => processChangeThemeMode("light")),
  );

  // toggle sidebar on mobile (lower screens) feature
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const openMenuButton = document.querySelector("[data-sidebar-button='open']");
  const closeMenuButton = document.querySelector(
    "[data-sidebar-button='close']",
  );

  openMenuButton.addEventListener("click", () => {
    openMobileMenu(mobileMenu);
  });

  closeMenuButton.addEventListener("click", () => {
    closeMobileMenu(mobileMenu);
  });
};

window.addEventListener("DOMContentLoaded", main);

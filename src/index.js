import {
  processChangeThemeMode,
  processInitialThemeMode,
} from "./js/helpers/theme";

const main = () => {
  // dark/light theme mode feature
  processInitialThemeMode();

  const darkThemeButton = document.querySelector("[data-theme-button='dark']");
  const lightThemeButton = document.querySelector(
    "[data-theme-button='light']",
  );

  darkThemeButton.addEventListener("click", () =>
    processChangeThemeMode("dark"),
  );
  lightThemeButton.addEventListener("click", () =>
    processChangeThemeMode("light"),
  );

  // toggle sidebar on mobile (lower screens) feature
};

window.addEventListener("DOMContentLoaded", main);

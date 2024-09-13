import { pipe } from "../utils";

export function processChangeThemeMode(themeMode) {
  pipe(setTheme, saveThemeModeToLocalStorage)(themeMode);
}

export function processInitialThemeMode() {
  const initialThemeMode =
    getThemeModeFromLocalStorage("themeMode") ||
    getThemeModeFromMedia() ||
    getDefaultThemeMode();

  setTheme(initialThemeMode)
}

function setTheme(themeMode) {
  if (themeMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return themeMode;
}

function saveThemeModeToLocalStorage(themeMode) {
  window.localStorage.setItem("themeMode", themeMode);
  return themeMode;
}

function getThemeModeFromLocalStorage(key) {
  if (!key) return;
  const persistedColorPreference = window.localStorage.getItem(key);
  const hasPersistedPreference = typeof persistedColorPreference === "string";

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  return undefined;
}

function getThemeModeFromMedia() {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  return undefined;
}

function getDefaultThemeMode() {
  return "light";
}

export const ThemesEnum = {
  Dark: "dark",
  Light: "light",
} as const;

export type Themes = (typeof ThemesEnum)[keyof typeof ThemesEnum];

export const ChangeTheme = (theme: Themes) => {
  document.documentElement.classList.remove(ThemesEnum.Dark, ThemesEnum.Light);
  localStorage.setItem("theme", theme);
  document.documentElement.classList.add(theme);
};

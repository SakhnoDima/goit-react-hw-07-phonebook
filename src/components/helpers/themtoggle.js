export const KEY_LS = 'theme';

export const setTheme = themeName => {
  localStorage.setItem(KEY_LS, themeName);
  document.documentElement.className = themeName;
};

export const keepTheme = () => {
  const theme = localStorage.getItem(KEY_LS);

  if (theme) {
    setTheme(theme === 'theme-dark' ? 'theme-dark' : 'theme-light');
  } else {
    setTheme('theme-light');
  }
};


const useTheme = () => {
  const setTheme = (themeName) =>
    useHead({
      htmlAttrs: {
        "data-theme": themeName,
      }
    });
  const theme = useCookie("theme");
  if (!!theme.value) {
    setTheme(theme.value);
  }

  const randomTheme = () => {
    const randomIndex = Math.floor(Math.random() * ThemesList.length);
    theme.value = ThemesList[randomIndex];
    setTheme(theme.value);
  };
  return {
    randomTheme,
    ThemesList,
    setTheme,
  };
};

export default useTheme;

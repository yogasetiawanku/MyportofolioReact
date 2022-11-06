function setDarkMode(isDark) {
  if (isDark) {
    document.body.setAttribute("id", "darkmode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.setAttribute("id", "");
    localStorage.setItem("theme");
  }
}
const DarkMode2 = () => {
  return (
    <div>
      <span onClick={setDarkMode(false)}>lol</span>
      <br />
      <span onClick={setDarkMode(true)}>point</span>
    </div>
  );
};

export default DarkMode2;

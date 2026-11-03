import "../css/Navbar.css";
import { SunMoon } from "lucide-react";

function Navbar(props) {
  const searchTerm = props.searchTerm;
  const setSearchTerm = props.setSearchTerm;
  const theme = props.theme;
  const setTheme = props.setTheme;

  return (
    <>
      <nav className="nav-bar">
        <a>AnimeTracker</a>
        <button
          className="theme"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <SunMoon size={20} />
        </button>
        <input
          className="navbar--search"
          type="text"
          value={searchTerm}
          placeholder="Search your anime"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>
    </>
  );
}

export default Navbar;

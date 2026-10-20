import "../css/Navbar.css";
import { SunMoon } from "lucide-react";

function Navbar(props) {
  const searchTerm = props.searchTerm;
  const setSearchTerm = props.setSearchTerm;

  return (
    <>
      <nav className="nav-bar">
        <a>AnimeTracker</a>
        <button style={{ background: "none", border: "none", color: "white" }}>
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

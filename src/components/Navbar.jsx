import "../css/Navbar.css";

function Navbar(props) {
  const searchTerm = props.searchTerm;
  const setSearchTerm = props.setSearchTerm;

  return (
    <>
      <nav className="nav-bar">
        <a>AnimeTracker</a>
        <button>toggle</button>
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

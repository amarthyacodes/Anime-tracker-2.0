import "./Navbar.css";

function Navbar(props) {
  const searchTerm = props.searchTerm;
  const setSearchTerm = props.setSearchTerm;

  return (
    <>
      <nav className="nav-bar">
        <a>AnimeTracker</a>
        <input
          className="navbar--search"
          type="text"
          value={searchTerm}
          placeholder="Search your anime"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>toggle</button>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimeSearch from "./components/AnimeSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        theme={theme}
        setTheme={setTheme}
      />
      <AnimeSearch searchTerm={searchTerm} />
    </>
  );
}

export default App;

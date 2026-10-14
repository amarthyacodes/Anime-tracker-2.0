import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AnimeSearch from "./components/AnimeSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AnimeSearch searchTerm={searchTerm} />
    </>
  );
}

export default App;

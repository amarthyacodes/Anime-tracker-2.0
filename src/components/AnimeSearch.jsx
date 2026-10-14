import { useState, useEffect } from "react";
import AnimeList from "./AnimeList";
import "./AnimeSearch.css";

function AnimeSearch(props) {
  const [anime, setAnime] = useState({
    title: "",
    date: "",
    rating: "",
    imgurl: "",
  });

  const searchTerm = props.searchTerm;
  const [title, setTitle] = useState("");
  const [list, setList] = useState(() => {
    //to get anime from local storage
    try {
      const saved = window.localStorage.getItem("animelist");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  });

  useEffect(() => {
    // for adding anime to localstorage once list is updated
    try {
      window.localStorage.setItem("animelist", JSON.stringify(list));
    } catch (err) {
      console.log(err);
    }
  }, [list]);

  //function to get anime from anilist api
  async function searchAnime(name) {
    const query = `
                  query ($search: String!) {
                    Page {
                      media(search: $search, type: ANIME) {
                        id
                        title {
                          english
                          romaji
                        }
                        coverImage {
                          extraLarge
                        }
                      }
                    }
                  }
                  `;

    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { search: name },
      }),
    });
    if (!response.ok) throw new Error("Request failed:" + response.status);
    const data = await response.json();
    if (data.errors) throw new Error(data.errors[0].message);
    return data;
  }

  //function to handle submit
  async function handleSubmit() {
    if (title.trim() === "" || anime.date === "" || anime.rating === "") {
      window.alert("Please enter anime details");
      return;
    }

    if (anime.rating < 1 || anime.rating > 10) {
      window.alert("Rating is between 1 and 10");
      setAnime((a) => ({ ...a, rating: "" }));
      return;
    }

    let data;
    try {
      data = await searchAnime(title);
    } catch (err) {
      window.alert("Something went wrong");
      console.log(err);
      return;
    }
    if (data.data.Page.media.length === 0) {
      window.alert("No such anime");
    } else {
      const result = data.data.Page.media[0];
      if (
        list.some(
          (anime) =>
            result.title.english === anime.title ||
            result.title.romaji === anime.title,
        )
      ) {
        window.alert("Anime already exists in your list");
        return;
      }

      const newAnime = {
        title: result.title.english || result.title.romaji,
        date: anime.date,
        rating: Math.round(anime.rating * 10) / 10,
        imgurl: result.coverImage.extraLarge,
      };
      setList((l) => [newAnime, ...l]);

      setTitle("");
      setAnime({
        title: "",
        date: "",
        rating: "",
        imgurl: "",
      });
    }
  }

  function deleteAnime(name) {
    setList((l) => l.filter((anime) => anime.title !== name));
  }

  return (
    <>
      <div className="search">
        <h3 className="search-heading">Search and add anime to your list</h3>
        <input
          className="title-input"
          type="text"
          placeholder="Search anime titles"
          value={title}
          onChange={(e) => setTitle((t) => e.target.value)}
        />
        <div className="search2">
          <input
            className="date-input"
            type="Date"
            placeholder="YYYY-MM-DD"
            value={anime.date}
            onChange={(e) => setAnime((a) => ({ ...a, date: e.target.value }))}
          />
          <input
            className="rating-input"
            type="number"
            value={anime.rating}
            placeholder="Select rating"
            onChange={(e) =>
              setAnime((a) => ({
                ...a,
                rating: e.target.value === "" ? "" : Number(e.target.value),
              }))
            }
          />
          <button className="submit" onClick={handleSubmit}>
            Add to List
          </button>
        </div>
      </div>
      <AnimeList list={list} onDelete={deleteAnime} searchTerm={searchTerm} />
    </>
  );
}

export default AnimeSearch;

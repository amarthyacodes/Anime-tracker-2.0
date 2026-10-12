import { useState } from "react";
import AnimeList from "./AnimeList";

function AnimeSearch() {
  const [anime, setAnime] = useState({
    title: "",
    date: "",
    rating: "",
    imgurl: "",
  });

  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

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
      console.log(data);
    } catch (err) {
      window.alert("Something went wrong");
      console.log(err);
      return;
    }
    if (data.data.Page.media.length === 0) {
      window.alert("No such anime");
    } else {
      const result = data.data.Page.media[0];
      const newAnime = {
        title: result.title.english || result.title.romaji,
        date: anime.date,
        rating: Math.round(anime.rating * 10) / 10,
        imgurl: result.coverImage.extraLarge,
      };
      setList((l) => [...l, newAnime]);

      setTitle("");
      setAnime({
        title: "",
        date: "",
        rating: "",
        imgurl: "",
      });
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter Anime Name"
        value={title}
        onChange={(e) => setTitle((t) => e.target.value)}
      />
      <input
        type="Date"
        value={anime.date}
        onChange={(e) => setAnime((a) => ({ ...a, date: e.target.value }))}
      />
      <input
        type="number"
        value={anime.rating}
        placeholder="Enter Rating"
        onChange={(e) =>
          setAnime((a) => ({
            ...a,
            rating: e.target.value === "" ? "" : Number(e.target.value),
          }))
        }
      />
      <button onClick={handleSubmit}>Submit</button>
      <AnimeList list={list} />
    </div>
  );
}

export default AnimeSearch;

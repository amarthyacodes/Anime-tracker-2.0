//function to get anime from anilist api
export const searchAnime = async (name) => {
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
};

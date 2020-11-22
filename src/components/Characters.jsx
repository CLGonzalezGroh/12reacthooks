import React, { useState, useEffect, useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Characters = () => {
  const [characters, setCharacters] = useState([""]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={theme.sectionClass}>
      <div className="container">
        <h1 className={theme.titleClass}>Rick and Morty</h1>
        <h2 className={theme.subtitleClass}>Characters</h2>
        <div className="columns is-multiline">
          {characters.map((character) => {
            return (
              <div key={character.id || 1} className="column is-one-fifth">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-square">
                      <img
                        className="has-ratio"
                        width="300"
                        height="300"
                        src={character.image}
                        alt="Placeholder"
                      />
                    </figure>
                  </div>
                  <div className={theme.cardHeaderClass}>
                    <h3 className={theme.cardHeaderTitleClass}>
                      {character.name}
                    </h3>
                  </div>
                  <div className={theme.cardContentClass}>
                    <div className="columns">
                      <div
                        className={`column is-on-third has-text-weight-semibold ${theme.cardContentColumnClass}`}
                      >
                        <p className="mb-0">Status:</p>
                        <p className="mb-0">Species:</p>
                        <p className="mb-0">Gender:</p>
                      </div>
                      <div className={`column ${theme.cardContentColumnClass}`}>
                        <p className="mb-0">{character.status}</p>
                        <p className="mb-0">{character.species}</p>
                        <p className="mb-0">{character.gender}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;

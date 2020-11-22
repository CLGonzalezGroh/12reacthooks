import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([""]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="section Character">
      <div className="container">
        <h1 className="title">Rick and Morty</h1>
        <h2 className="subtitle">Characters</h2>
        <div className="columns is-multiline">
          {characters.map((character) => (
            <div key={character.id} className="column is-one-fifth">
              <div className="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img
                      className="has-ratio"
                      width="300"
                      height="300"
                      src={character.image}
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <div className="card-header">
                  <h3 className="card-header-title">{character.name}</h3>
                </div>
                <div class="card-content">
                  <div className="columns">
                    <div className="column is-on-third has-text-weight-semibold has-text-primary-dark">
                      <p className="mb-0">Status:</p>
                      <p className="mb-0">Species:</p>
                      <p className="mb-0">Gender:</p>
                    </div>
                    <div className="column has-text-primary-dark">
                      <p className="mb-0">{character.status}</p>
                      <p className="mb-0">{character.species}</p>
                      <p className="mb-0">{character.gender}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;

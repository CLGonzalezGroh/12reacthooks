import React, { useState, useEffect, useContext, useReducer } from "react";

import ThemeContext from "../context/ThemeContext";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([""]);
  const { theme } = useContext(ThemeContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  return (
    <>
      <section className={theme.sectionClass}>
        <div className="container">
          <h1 className={theme.titleClass}>Rick and Morty</h1>
          <h2 className={theme.titleClass}>Favorites</h2>
          {favorites.favorites.map((favorite) => (
            <h3 key={favorite.id ? favorite.id.toString() : "99"}>
              {favorite.name}
            </h3>
          ))}
        </div>
      </section>
      <section className={theme.sectionClass}>
        <div className="container">
          <h1 className={theme.titleClass}>Rick and Morty</h1>
          <h2 className={theme.titleClass}>Characters</h2>
          <div className="columns is-multiline">
            {characters.map((character) => {
              return (
                <div
                  key={character.id ? character.id.toString() : "99"}
                  className="column is-one-fifth"
                >
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
                        <div
                          className={`column ${theme.cardContentColumnClass}`}
                        >
                          <p className="mb-0">{character.status}</p>
                          <p className="mb-0">{character.species}</p>
                          <p className="mb-0">{character.gender}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className={`${theme.buttonClass} is-fullwidth`}
                        onClick={() => handleClick(character)}
                      >
                        Add to favorite
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Characters;

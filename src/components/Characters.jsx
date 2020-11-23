import React, {
  useState,
  useContext,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";

import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};
const API = "https://rickandmortyapi.com/api/character/?page=2";

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
  const { theme } = useContext(ThemeContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredCharacters = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [characters, search]);

  return (
    <>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <section className={theme.sectionClass}>
        <div className="container">
          <h1 className={theme.titleClass}>Rick and Morty</h1>
          <h2 className={theme.titleClass}>Favorites</h2>
          {favorites.favorites.map((favorite) => (
            <li
              key={favorite.id ? favorite.id.toString() : "99"}
              className={theme.cardContentColumnClass}
            >
              {favorite.name}
            </li>
          ))}
        </div>
      </section>
      <section className={theme.sectionClass}>
        <div className="container">
          <h1 className={theme.titleClass}>Rick and Morty</h1>
          <h2 className={theme.titleClass}>Characters</h2>
          <div className="columns is-multiline">
            {filteredCharacters.map((character) => {
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

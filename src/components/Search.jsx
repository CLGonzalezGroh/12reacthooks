import React from "react";

const Search = ({ search, searchInput, handleSearch }) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Search</h1>
        <input
          type="text"
          placeholder="Search character name"
          class="input is-rounded"
          onChange={handleSearch}
          value={search}
          ref={searchInput}
        />
      </div>
    </div>
  </section>
);

export default Search;

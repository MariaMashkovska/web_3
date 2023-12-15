import React, { useState } from "react";
import { Slider } from "../Slider/Slider";
import styles from "./Filter.module.scss";

export const Filter = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("higher");

  const handleSearch = () => {

    console.log("Search item from size:", searchText);
  };

  const handleSortChange = (value: string) => {

    setSortOption(value);
  };

  const sortingOptions = [
    { value: "higher", label: "Sort by Higher Size" },
    { value: "lower", label: "Sort by Lower Size" },
    { value: "unsorted", label: "Do not Sort at All" },
  ];

  return (
    <div>
      <div className={styles.filter}>
        <input
          className={styles.textInput}
          type="text"
          name="search item"
          placeholder="dum-du-du-dum"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>

      <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
        {sortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {sortOption === "higher" && (
        <Slider step="100" min="1" max="10000" label="Search" onChange={() => {}} />
      )}

      {sortOption === "lower" && (
        <Slider step="100" min="1" max="10000" label="Search" onChange={() => {}} />
      )}
    </div>
  );
};

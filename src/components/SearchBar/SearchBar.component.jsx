import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input
        id="searchValue"
        value={props.searchValue}
        placeholder="Search a video..."
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

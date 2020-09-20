import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  float: right;
  display: block;
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
`;

const SearchBar = (props) => {
  return (
    <div>
      <Input
        id="searchValue"
        value={props.searchValue}
        placeholder="Search a video..."
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

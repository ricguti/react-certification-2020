import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  float: right;
  display: block;
  margin: 1em;
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
`;

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    props.onSearchChange(searchValue);
  };

  return (
    <form data-testid="search-box" onSubmit={(e) => submitForm(e)}>
      <Input
        id="searchValue"
        value={searchValue}
        placeholder="Search a video..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default Search;

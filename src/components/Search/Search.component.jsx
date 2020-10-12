import React, { useState } from 'react';
import styled from 'styled-components';
import youTube from '../../api/youtube';

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
    youTube({
      part: 'snippet',
      maxResults: 10,
      q: searchValue,
    }).then(props.setVideos);
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

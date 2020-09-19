import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default SearchPage;

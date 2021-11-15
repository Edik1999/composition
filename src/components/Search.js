import React from 'react';
import SearchLinks from './SearchLinks';
import SearchInput from './SearchInput';
import SearchText from './SearchText';
import SearchBanner from './SearchBanner';


const Search = () => {

    // Выводит контентную часть страницы

    return (
        <section className="search">
          <SearchLinks/>
          <SearchInput/>
          <SearchText/>
          <SearchBanner/>
        </section>
    );
}

export default Search;

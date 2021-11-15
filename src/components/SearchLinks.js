import React from 'react';
import SearchLink from './SearchLink';


const SearchLinks = () => {

    // выводит список ссылок над строкой поиска

    return (
        <div className="row mt-4">
            <SearchLink link="#" text="Lorem"/>
            <SearchLink link="#" text="Lkdd"/>
            <SearchLink link="#" text="Ngdf"/>
            <SearchLink link="#" text="Nvdsc"/>
            <SearchLink link="#" text="Iera"/>
            <SearchLink link="#" text="Pers"/>
            <SearchLink link="#" text="Byte"/>
            <SearchLink link="#" text="Lorem"/>
        </div>
    );
}

export default SearchLinks;

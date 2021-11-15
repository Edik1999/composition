import React from 'react';

const SearchLink = ({link, text}) => {

    // выводит заголовок ссылки над строкой поиска

    return (
        <div className="col-1">
            <h5 className="mb-0"><a href={link}>{text}</a></h5>
        </div>
    );
}

export default SearchLink;

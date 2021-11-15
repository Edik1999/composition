import React from 'react';

const SearchInput = () => {

    // выводит лого слева от поиска, строку поиска, и кнопку

    return (
        <div className="row search__inputWrapper my-3">
            <div className="col">
              <img src="holder.js/150x30" className="logo"/>
              <input type="text" className="w-75 border-warning"/>
              <button className="border-warning bg-warning">Найти</button>
            </div>
        </div>
    );
}

export default SearchInput;

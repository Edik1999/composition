import React from 'react';
import News from './News';
import Watch from './Watch';

const Header = () => {

    // Выводит хедер

    return (
        <header className="row header mt-5">
          <News/>
          <Watch/>
        </header>
    );
}

export default Header;

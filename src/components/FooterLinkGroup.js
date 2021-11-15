import React from 'react';

const FooterLinkGroup = ({children}) => {

    // Выводит блок ссылок в футере

    return (
        <div className="mt-4">
            {children}
        </div>
    );
}

export default FooterLinkGroup;

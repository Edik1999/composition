import React from 'react';

const FooterTitle = ({text, src, children}) => {

    // выводит заголовок блока со ссылками, если получает картинку в пропсах выводит ее

    return (
        <h5><a href={src}>{text}</a>{children}</h5>
    );
}

export default FooterTitle;

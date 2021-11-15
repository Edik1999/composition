import React from 'react';

const NewsTitle = ({active, text}) => {

    // Выводит разделы новостей в верхней части страницы

    return (
        <h2 className={`col news__title text-primary mb-0 ${active ? active : ''}`}>{text}</h2>
    );
}

export default NewsTitle;

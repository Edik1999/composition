import React from 'react';

const NewsItem = ({src, link, text}) => {

    // Выводит новости в верхней части страницы, получает ссылку, путь к картинке и заголовок новости

    return (
        <div className="row news__item mt-3">
            <div className="col news__itemWrapper">
                <img src={src} alt={src}/>
                <a href={link} className="ml-3 text-body">{text}</a>
            </div>
        </div>
    );
}

export default NewsItem;

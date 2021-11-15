import React from 'react';
import NewsBody from './NewsBody';
import NewsHeader from './NewsHeader';


const News = () => {

    // выводит блок новостей в верхней части страницы

    return (
        <div className="col-8 news">
            <NewsHeader/>
            <NewsBody/>
        </div>
    );
}

export default News;

import React from 'react';
import NewsTitle from './NewsTitle';

const NewsHeader = () => {

    // Выводит строку с разделами новостей

    return (
        <div className="row news__header">
            <NewsTitle active='active' text='title1'/>
            <NewsTitle text='title2'/>
            <NewsTitle text='title3'/>
            <div className="col news__date text-muted">{new Date().toLocaleString()}</div>
        </div>
    );
}

export default NewsHeader;

import React from 'react';
import NewsItem from './NewsItem';
import CurrencyItem from './CurrencyItem';

const NewsBody = () => {

    // Выводит список новостей и курсы

    return (
        <div className="row news__body">
            <div className="col">
                <NewsItem src='holder.js/20x20' link="#" text='Lorem ipsum dolor sit amet consectetur.'/>
                <NewsItem src='holder.js/20x20' link="#" text='Lorem, ipsum dolor amet consectetur adipisicing elit. Perspiciatis aperiam, eveniet.'/>
                <NewsItem src='holder.js/20x20' link="#" text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'/>
                <NewsItem src='holder.js/20x20' link="#" text='Ipsum dolor amet consectetur adipisicing elit. Perspiciatis.'/>
                <NewsItem src='holder.js/20x20' link="#" text='Consectetur adipisicing elit. Perspiciatis aperiam, eveniet consectetur adipisicing.'/>
                <div className="row mt-4">
                    <CurrencyItem currency='USD' price='36' changeValue='-2'/>
                    <CurrencyItem currency='EUR' price='40' changeValue='-3'/>
                    <CurrencyItem currency='НЕФТЬ' price='80' changeValue='+2'/>
                </div>
            </div>
        </div>
    );
}

export default NewsBody;

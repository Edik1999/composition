import React from 'react';

const CurrencyItem = ({currency, price, changeValue}) => {

    // Выводит курс валюты

    return (
        <div className="col-4 news__currencyItem">
            <h2 className="news__currencyItem-title d-inline">{currency}</h2>
            <span className="ml-2">{price}</span>
            <span className="text-muted ml-3">{changeValue}</span>
        </div>
    );
}

export default CurrencyItem;

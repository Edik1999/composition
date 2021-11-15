import React from 'react';

const Watch = () => {

    // выводит блок "Смотрите на яндексе" в верхней части страницы

    return (
        <div className="col-4 watch mt-auto">
            <div className="row">
              <div className="col">
                <div className="watch__imgWrap">
                  <img src='holder.js/100x100' alt="100x100"/>
                </div>
                <h3 className="watch__title"><a href="#">Lorem ipsum</a></h3>
                <p className="mb-0"><a href="#" className="text-body">Lorem ipsum dolor sit amet</a></p>
              </div>
            </div>
        </div>
    );
}

export default Watch;

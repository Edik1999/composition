import React from 'react';

const FooterLink = ({src, text, subSrc, subText, imgSrc, weather}) => {

    // Выводит ссылки в нижней части страницы либо погоду

    return (
        <>
            { weather 
                ?
                    <div className="d-flex mt-3">
                        <img src="holder.js/60x60"/>
                        <span className="weather ml-2">+17</span>
                        <div className="ml-2">
                            <p className="ml-2 mb-0">Утром +17,</p>
                            <p className="ml-2 mb-0">днём +20</p>
                        </div>
                    </div>
                :
                    <p className={`footer__link ${imgSrc ? 'news__itemWrapper' : ''}`}>
                        {imgSrc ? <img src={imgSrc} alt="news"/> : <></>}
                        <a href={src} className={`text-body ${imgSrc ? 'ml-3' : ''}`}>{text}</a>
                        {subText ? <span className="ml-2"><a href={subSrc} className="text-muted">{subText}</a></span> : <></>}
                    </p>
            }
        </>    
    );
}

export default FooterLink;

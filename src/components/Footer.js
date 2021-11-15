import React from 'react';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';
import FooterLinkGroup from './FooterLinkGroup';

const Footer = () => {

    // Выводит футер

    return (
        <footer className="mt-3 d-flex justify-content-between">
          <div className="footer__block">
            <FooterLinkGroup>
              <FooterTitle src="#" text="Погода"/>
              <FooterLink weather={true}/>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterTitle src="#" text="Посещаемое"/>
              <FooterLink src="#" text="Недвижимость - о сталинках"/>
              <FooterLink src="#" text="Маркет - люстры и светильники"/>
              <FooterLink src="#" text="Авто.ру - привод 4х4 до 500 000"/>
            </FooterLinkGroup>
          </div>
          <div className="footer__block">
            <FooterLinkGroup>
              <FooterTitle src="#" text="Карта Германии"/>
              <FooterLink text="Расписания"/>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterTitle src="#" text="Телепрограмма">
                <img src="holder.js/80x30" className="ml-3"/>
              </FooterTitle>
              <FooterLink src="#" text="02:00 ТНТ.Best" subText="THT International" subSrc="#"/>
              <FooterLink src="#" text="02:15 Джинглики" subText="Карусель Int" subSrc="#"/>
              <FooterLink src="#" text="02:25 Наедине со всеми" subText="Первый International" subSrc="#"/>
            </FooterLinkGroup>
          </div>
          <div className="footer__block">
            <FooterLinkGroup>
              <FooterTitle src="#" text="Эфир"/>
              <FooterLink src="#" text="Управление как искусство" subText="Успех" subSrc="#" imgSrc="holder.js/20x20"/>
              <FooterLink src="#" text="Ночь. Мир в это время" subText="earthTV" subSrc="#" imgSrc="holder.js/20x20"/>
              <FooterLink src="#" text="Андрей Возн..." subText="Совершенно секретно" subSrc="#" imgSrc="holder.js/20x20"/>
            </FooterLinkGroup>
          </div>
        </footer>
    );
}

export default Footer;

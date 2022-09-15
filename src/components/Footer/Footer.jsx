import React from 'react';
import Container from '../Container/Container';
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PinterestIcon } from '../../img/pinterest.svg';
import { ReactComponent as StumbleuponIcon } from '../../img/stumbleupon.svg';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
      <div className={style.wrapper}>
        <div className={style.contacts}>
            <p>Design: <a href='https://t.me/Mrshmallowww' target='_blank' rel="noreferrer">Anastasia Ilina</a></p>
            <p>Сoder: <a href='https://github.com/nos64' target='_blank' rel="noreferrer">nos64</a></p>
            <p>© HBCard, 2022</p>
          </div>

          <ul className={style.social}>
            <li className={style.item}>
              <a href='https://vk.com/id8862703' target='_blank' rel="noreferrer" className={style.link}><VKIcon/></a>
            </li>
            <li className={style.item}>
              <a href='https://t.me/ziglobe' target='_blank' rel="noreferrer" className={style.link}><TGIcon/></a>
            </li>
            <li className={style.item}>
              <a href='https://pinterest.com' target='_blank' rel="noreferrer" className={style.link}><PinterestIcon/></a>
            </li>
            <li className={style.item}>
              <a href='https://stumbleupon.com' target='_blank' rel="noreferrer" className={style.link}><StumbleuponIcon/></a>
            </li>
          </ul>
      </div>
        
      </Container>
    </footer>
  );
};

export default Footer;
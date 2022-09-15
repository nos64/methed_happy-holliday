import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css';
import Choices from './Choices/Choices';
const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}>Поменять поздравление</button>
            <button className={style.button}>Поменять фон</button>
          </div>
          <Choices/>
        </div>
      </Container>
    </header>
    
  );
};

export default Header;
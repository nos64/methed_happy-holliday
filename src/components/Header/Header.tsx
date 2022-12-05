import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.scss';
import Choices from './Choices/Choices';
import { fetchText } from '../../store/textSlice';
import { fetchImage } from '../../store/imgSlice';
import { useParams } from 'react-router-dom';
import { useAppDispath } from './../../hooks/hooks';

const Header = () => {
  const dispatch = useAppDispath();
  const { holiday } = useParams();

  const handleChangeImage = () => {
    holiday && dispatch(fetchImage(holiday))
  }
  const handleChangeText = () => {
    holiday && dispatch(fetchText(holiday))
  }
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button onClick={handleChangeText} disabled={!holiday} className={style.button}>Поменять поздравление</button>
            <button onClick={handleChangeImage} disabled={!holiday} className={style.button}>Поменять фон</button>
          </div>
          <Choices/>
        </div>
      </Container>
    </header>
    
  );
};

export default Header;
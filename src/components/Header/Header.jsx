import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css';
import Choices from './Choices/Choices';
import { fetchText } from '../../store/textSlice';
import { fetchImage } from '../../store/imgSlice';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const { holiday } = useSelector(state => state.holidays);
  const dispatch = useDispatch();

  const handleChangeImage = () => {
    dispatch(fetchImage(holiday))
  }
  const handleChangeText = () => {
    dispatch(fetchText(holiday))
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
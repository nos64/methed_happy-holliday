import React from 'react';
import style from './Felicitation.module.css';
import { useSelector } from 'react-redux';

const Felicitation = () => {
  const {text, loading} = useSelector(state => state.text);

  return (
    <p className={style.felicitation}>
    {loading === 'loading' ? 'Загрузка...' : text === '' ? 'Выберете повод для поздравления!' 
      : text}
      </p>
  );
};

export default Felicitation;
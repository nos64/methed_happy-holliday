import React from 'react';
import style from './EmptyCard.module.scss';

const EmptyCard = () => {
  return (
    <div className={style.card}>
      <p>Выберете повод для поздравления!</p>
    </div>
  );
};

export default EmptyCard;
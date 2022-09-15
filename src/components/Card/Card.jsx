import React from 'react';
import style from './Card.module.css';
import Image from './Image/Image';


const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <Image />
      </div>
    </div>
  );
};

export default Card;
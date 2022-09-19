import React from 'react';
import style from './Card.module.css';
import ImageCard from './ImageCard/ImageCard';
import Felicitation from './Felicitation/Felicitation';
import CardBG from '../../img/card-bg.jpg';

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
      <div className={style.image}>
        <ImageCard img={CardBG}/>
        <Felicitation />
      </div>
        
      </div>
    </div>
  );
};

export default Card;
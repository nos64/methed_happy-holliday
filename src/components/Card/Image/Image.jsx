import React from 'react';
import style from './Image.module.css';
import Felicitation from './Felicitation/Felicitation';
import imageCard from '../../../img/card-bg.jpg';

const Image = () => {
  return (
    <div className={style.image}>
      <img className={style.img} src={imageCard} alt="" />
      <Felicitation />
    </div>
  );
};

export default Image;
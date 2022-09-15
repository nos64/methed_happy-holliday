import React from 'react';
import style from './Image.module.css';
import Felicitation from './Felicitation/Felicitation';

const Image = () => {
  return (
    <div className={style.image}>
      <img className={style.img} src="../../../img/card-bg.jpg" alt="" />
      <Felicitation />
    </div>
  );
};

export default Image;
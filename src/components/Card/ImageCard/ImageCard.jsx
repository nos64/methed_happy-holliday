import React, { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';
import CardBG from '../../../img/card-bg.jpg';

const ImageCard = () => {
  const {urlImg}= useContext(imgContext);
  return (
    <img src={urlImg || CardBG} alt="Фон открытки" width={840} height={520} />
  );
};

export default ImageCard;
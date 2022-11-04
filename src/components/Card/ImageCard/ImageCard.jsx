import React from 'react';
import CardBG from '../../../img/card-bg.jpg';
import { useSelector } from 'react-redux';

const ImageCard = () => {
  const {urlImg, loading} = useSelector(state => state.image);

  return (
  <img src={loading === 'loading' ? CardBG : urlImg} alt="Фон открытки" width={840} height={520} />
  );
};

export default ImageCard;
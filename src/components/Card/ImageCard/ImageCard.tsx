import React from 'react';
import CardBG from '../../../img/card-bg.jpg';
import { useAppSelector } from 'src/hooks/hooks';


const ImageCard = () => {
  const {urlImg, loading} = useAppSelector (state => state.image);

  return (
  <img src={loading ? CardBG : urlImg} alt="Фон открытки" width={840} height={520} />
  );
};

export default ImageCard;
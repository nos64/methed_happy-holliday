import React from 'react';

import { useAppSelector } from 'src/hooks/hooks';
import CardBG from '../../../img/card-bg.jpg';



const ImageCard = () => {
  const {urlImg, loading} = useAppSelector (state => state.image);

  return (
  <img src={loading ? CardBG : urlImg} alt="Фон открытки" width={840} height={520} />
  );
};

export default ImageCard;
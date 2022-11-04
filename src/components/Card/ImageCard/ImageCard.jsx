import React from 'react';
// import CardBG from '../../../img/card-bg.jpg';
import { useSelector } from 'react-redux';

const ImageCard = () => {
  // const {urlImg}= useContext(imgContext);
  const {urlImg, loading} = useSelector(state => state.image);

  return (
    // <img src={image || CardBG} alt="Фон открытки" width={840} height={520} />
    // {loading === 'loading' ? <img src={CardBG} alt="Фон открытки" width={840} height={520} /> : <img src={image} alt="Фон открытки" width={840} height={520} /> }
    <img src={urlImg} alt="Фон открытки" width={840} height={520} />
  );
};

export default ImageCard;
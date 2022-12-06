import React, { useEffect } from 'react';

import ImageCard from './ImageCard/ImageCard';
import Felicitation from './Felicitation/Felicitation';

import { useParams } from 'react-router-dom';
import { fetchImageId } from '../../store/imgSlice';
import { useAppDispath } from '../../hooks/hooks';
import { fetchTextId } from '../../store/textSlice';

import style from './Card.module.scss';
const Card = () => {
  const { idText, idImg} = useParams();
  const dispatch = useAppDispath();

  useEffect(() => {
    if (idText && idImg) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImageId(idImg))
    }
  })
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
      <div className={style.image}>
        <ImageCard />
        <Felicitation />
      </div>
        
      </div>
    </div>
  );
};

export default Card;
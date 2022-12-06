import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { fetchHolidays } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImage } from '../../../store/imgSlice';
import { useAppDispath } from './../../../hooks/hooks';
import { useAppSelector } from 'src/hooks/hooks';

import style from './Choices.module.scss';
type HolidayParam = {
  holiday: string;
}

const Choices = () => {
  const [isOpenChoices, setIdOpenChoicse] = useState(false);
  const { holidays, loading } = useAppSelector(state => state.holidays);
  const dispatch = useAppDispath();
  const { holiday } = useParams<HolidayParam>();

  const toggleChoices = () => {
    if (loading) return;
    setIdOpenChoicse(!isOpenChoices)
  }

  useEffect(() => {
    dispatch(fetchHolidays());
    if (holiday) {
      dispatch(fetchText(holiday));
      dispatch(fetchImage(holiday));
    }
  }, [dispatch, holiday])

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {loading ?
        'Загрузка...' : holiday && holidays && holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
        {holidays && Object.entries(holidays).map(item => (
          <li
            onClick={() => {
              toggleChoices();
            }}
            className={style.item}
            key={item[0]}
          >
            <NavLink 
              to={`card/${item[0]}`}
              className={({isActive}) => (isActive ? style.linkActive : '')}
              >{item[1]}</NavLink>
          </li>
        ))}
      </ul>
      )
      }
      
    </div>
    
  );
};

export default Choices;
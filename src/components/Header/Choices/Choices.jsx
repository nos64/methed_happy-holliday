import React, { useState, useEffect } from 'react';
import style from './Choices.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setHoliday, fetchHolidays } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImage } from '../../../store/imgSlice';

const Choices = () => {
  const [isOpenChoices, setIdOpenChoicse] = useState(false);
  const { holiday, holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();

  const toggleChoices = () => {
    if (loading !== 'success') return;
    setIdOpenChoicse(!isOpenChoices)
  }

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch])
  console.log('holidays: ', holidays);
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {loading !== 'success'?
        'Загрузка...' : holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => (
          <li
            onClick={() => {
              dispatch(setHoliday(item[0]));
              dispatch(fetchText(item[0]))
              dispatch(fetchImage(item[0]))
              toggleChoices();
            }}
            className={style.item}
            key={item[0]}
          >
            {item[1]}
          </li>
        ))}
      </ul>
      )
      }
      
    </div>
    
  );
};

export default Choices;
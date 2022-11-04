import React, { useState, useEffect } from 'react';
import style from './Choices.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setHoliday, fetchHolidays } from '../../../store/holidaysSlice';

const Choices = () => {
  const [isOpenChoices, setIdOpenChoicse] = useState(false);
  const { holiday, holidays } = useSelector(state => state.holidays);
  const dispatch = useDispatch();

  const toggleChoices = () => {
    setIdOpenChoicse(!isOpenChoices)
  }

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch])

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => (
          <li
            onClick={() => {
              dispatch(setHoliday(item[0]));
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
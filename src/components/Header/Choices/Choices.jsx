import React, { useState, useContext } from 'react';
import style from './Choices.module.css';
import { holidaysContext } from '../../../context/holidaysContext';

const Choices = () => {
  const [isOpenChoices, setIdOpenChoicse] = useState(false);
  const {holidays, holiday, changeHoliday} = useContext(holidaysContext);

  const toggleChoices = () => {
    setIdOpenChoicse(!isOpenChoices)
  }

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
              changeHoliday(item[0]);
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
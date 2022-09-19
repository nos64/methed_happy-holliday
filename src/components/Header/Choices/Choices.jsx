import React, { useState, useContext } from 'react';
import style from './Choices.module.css';
import { holidayContext } from '../../../context/holidayContext';

const holidays = {
  newyear: 'Новый год',
  birtdayWoman:'День рождения  Ж',
  birthdayMan:'День рождения  М',
  womansday: '8 марта',
  knowledgeday:'День знаний',
}

const Choices = () => {
  const [isOpenChoices, setIdOpenChoicse] = useState(false);
  const [holiday, setHoliday] = useState('Выбрать праздник');
  // const holiday = useContext(holidayContext);
  const toggleChoices = () => {
    setIdOpenChoicse(!isOpenChoices)
  }

  const changeHoliday = title => {
    setHoliday(title);
    toggleChoices();
  }
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>{holiday}</button>
      {isOpenChoices && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => (
          <li
            onClick={() => changeHoliday(item[1])}
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
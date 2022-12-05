import React from 'react';
import { useAppSelector } from 'src/hooks/hooks';
import styles from './Felicitation.module.scss';


const Felicitation = () => {
  const {text, loading} = useAppSelector(state => state.text);

  return (
    <p className={styles.felicitation}>
    {loading ? 'Загрузка...' : text === '' ? 'Выберете повод для поздравления!' 
      : text}
      </p>
  );
};

export default Felicitation;
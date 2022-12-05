import React from 'react';
import styles from './Container.module.scss';

interface IContainer {
  children?: JSX.Element;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
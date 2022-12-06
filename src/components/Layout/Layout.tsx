import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/hooks';

import styles from './Layout.module.scss';

const Layout = () => {
  const {text: {idText}, image: {idImg}} = useAppSelector (state => state);
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      {idText && idImg && (
        <Link className={styles.btn} to={`singleCard/${idText}/${idImg}`}>
          Поделиться открыткой
        </Link>
      )}
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const btn = {
  display: 'block',
  margin: '20px auto',
  padding: '10px',
  border: '2px solid #04996c'
}
const Layout = () => {
  const {text: {idText}, image: {idImg}} = useSelector(state => state);
  return (
    <div style={wrapper}>
      <Header />
      <Outlet />
      {idText && idImg && (
        <Link style={btn} to={`singleCard/${idText}/${idImg}`}>
          Поделиться открыткой
        </Link>
      )}
      <Footer />
    </div>
  );
};

export default Layout;

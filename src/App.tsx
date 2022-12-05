import Card from './components/Card/Card';
import EmptyCard from './components/EmptyCard/EmptyCard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<EmptyCard />} />
          <Route path="card/:holiday" element={<Card />} />
        </Route>
        <Route path='singleCard/:idText/:idImg'  element={<Card />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

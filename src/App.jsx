import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Announcement from '@pages/Announcement';
import QA from '@pages/QA';
import Introduction from '@pages/Introduction';
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Header from '@layouts/Header';
import BattleOn from '@pages/BattleOn';
import BattlePrev from '@pages/BattlePrev';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/battle/prev' element={<BattlePrev />} />
        <Route path='/battle/on' element={<BattleOn />} />
        <Route path='/announcement' element={<Announcement />} />
        <Route path='/qa' element={<QA />} />
        <Route path='introduction' element={<Introduction />} />
        <Route path='login' element={<LogIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;

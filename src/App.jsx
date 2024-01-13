import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Battle from '@pages/Battle';
import Announcement from '@pages/Announcement';
import QA from '@pages/QA';
import Introduction from '@pages/Introduction';
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Header from '@layouts/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/battle' element={<Battle />} />
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

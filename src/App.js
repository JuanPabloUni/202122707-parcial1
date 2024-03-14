import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './home';
import profile from './profile';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<home />} />
         <Route path="/profile" element={<profile />} />
       </Routes>
     </BrowserRouter>
  );
};

export default App;
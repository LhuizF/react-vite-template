import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/404';

function App() {
  return (
    <HashRouter>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

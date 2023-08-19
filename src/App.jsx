import React from 'react';
import {Route,Routes, BrowserRouter } from 'react-router-dom';
import Form from './Form';
import ResultPage from './ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route exact path="/" element={<Form/>} />
          <Route path="/result" element={<ResultPage/>} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

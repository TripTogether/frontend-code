import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyPage from './pages/MyPage/MyPage';
import Plan from './pages/Plan/Plan';
import List from './pages/List/List';
import React, { Component } from 'react';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myPage" element={<MyPage />}></Route>
          <Route path="/plan" element={<Plan />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

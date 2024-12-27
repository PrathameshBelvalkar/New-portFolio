import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Route>
    </Routes>
  );
}

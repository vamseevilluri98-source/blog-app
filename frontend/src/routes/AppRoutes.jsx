import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Blog from '../pages/Blog';
import AddBlog from '../pages/AddBlog';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Blog />} />
      <Route path="add-blog" element={<AddBlog />} />
      
      </Route>

  
    </Routes>
  );
};

export default AppRoutes;
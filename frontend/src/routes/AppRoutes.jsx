import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Blog from '../pages/Blog';
import AddBlog from '../pages/AddBlog';
import BlogDetails from '../pages/BlogDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Blog />} />
      <Route path="add-blog" element={<AddBlog />} />
      <Route path="blog-details/:id" element={<BlogDetails />} />
      </Route>

  
    </Routes>
  );
};

export default AppRoutes;
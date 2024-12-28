import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const BlogDetails = lazy(() => import('./components/Editor/BlogDetails'));
export default function App() {
  return (
    <Suspense fallback={<span className='display-6'>Loading...</span>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<BlogDetails />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// Modal for redirecting to new site
const REDIRECT_URL = 'https://prathameshbelvalkar.vercel.app/';
function RedirectModal() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      window.location.href = REDIRECT_URL;
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Modal isOpen={open} centered backdrop="static" keyboard={false}>
      <ModalHeader>Redirecting...</ModalHeader>
      <ModalBody>
        <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          You are being redirected to the newer version of this site.<br />
          <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer">Click here if not redirected</a>
        </div>
      </ModalBody>
    </Modal>
  );
}
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
// import EditBlog from './components/Editor/EditBlog';
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const BlogDetails = lazy(() => import('./components/Editor/BlogDetails'));
const EditBlog = lazy(() => import('./components/Editor/EditBlog'));
export default function App() {
  return (
    <>
      <RedirectModal />
      <Suspense fallback={<span className='display-6'>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:title" element={<BlogDetails />}></Route>
            {/* <Route path="/blog/edit" element={<EditBlog />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

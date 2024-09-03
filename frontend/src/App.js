import React from 'react';
import './App.css';
import Register from './Components/Register';
import Createpost from './Components/Createpost';
import Home from './Components/Home';
import AllPost from './Components/AllPost';
import PostDetail from './Components/PostDetails';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';

function App() {

  
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Home />
          <h2>Register</h2>
    <Register />
    <h2>Create post</h2>
    <Createpost />
          </>
        } />
        <Route path='/AllPost' element={<AllPost />} />
        <Route path='/PostDetail/:id' element={<PostDetail />} />
      </Routes>
      </BrowserRouter>
      
    
    </>
  );
};

export default App;

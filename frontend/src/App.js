import React from "react";
import "./App.css";
import Home from "./Components/Home";
import AllPost from "./Components/AllPost";
import PostDetails from "./Components/PostDetails";
import Login from "./Components/Login";
import Editpost from "./Components/Editpost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/AllPost" element={<AllPost />} />
          <Route path="/PostDetail/:id" element={<PostDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Editpost/:id" element={<Editpost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

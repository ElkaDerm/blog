
import React from 'react';
import { Routes, Route } from 'react-router-dom'


import { LoginPage } from "./components/authentication/LoginPage.js";
import { RegisterPage } from "./components/authentication/RegisterPage.js";
import { AllPosts } from './components/blog-post/AllPosts.js';
import { DetailsPage } from "./components/blog-post/DetailsPage.js";
import { HomePage } from "./components/home/HomePage.js";


function App() {
  return (
    
    <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='blog' element={<AllPosts/>}/>
      <Route path='blog/:postId' element={<DetailsPage/>}/>
      
      <Route path='register' element={<RegisterPage/>}/>
      <Route path='login' element={<LoginPage/>}/>


    </Routes>
      



  );
}

export default App;

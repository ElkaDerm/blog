
import React from 'react';
import { Routes, Route } from 'react-router-dom'


import { LoginPage } from "./components/authentication/LoginPage.js";
import { RegisterPage } from "./components/authentication/RegisterPage.js";
import { AllPosts } from './components/blog-post/AllPosts.js';
import { DetailsPage } from "./components/blog-post/DetailsPage.js";
import { HomePage } from "./components/home/HomePage.js";
import { DefaultLayout } from './components/shared/DefaultLayout.js';
import { NotFoundPage } from './components/errors/NotFoundPage.js';
import { AuthProvider } from './context/AuthProvider.js';


function App() {
    return (

        <AuthProvider>

        <Routes>
            <Route path='/' element={<DefaultLayout />}>

                <Route path='blog' element={<AllPosts />} />
                <Route path='blog/:postId' element={<DetailsPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='login' element={<LoginPage />} />

                <Route index element={<HomePage />} />

            </Route>

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </AuthProvider>




    );
}

export default App;

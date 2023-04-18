import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';


const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path='/' element={<Login />} />
                <Route exact={true} path='/cadastrar' element={<Cadastrar />} />
                <Route exact={true} path='/home' element={<Home />} />
                <Route exact={true} path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes
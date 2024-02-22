import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DevDashboard from './components/developer/DevDashboard';
import Docs from './components/developer/Docs';


import Cancel from './components/payments/Cancel';
import Success from './components/payments/Success';
import Checkout from './components/payments/Checkout';

import Boost from './components/cc/Boost';
import CCDashboard from './components/cc/CCDashboard';

import Profile from './components/Profile';

import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

import AdminLogin from './components/admin/AdminLogin';
import ManageCollections from './components/admin/ManageCollections';
import ApproveRequests from './components/admin/ApproveRequests';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path='/developers' element={<DevDashboard />} />
        <Route path='/developers/docs' element={<Docs />} />

        <Route path='/creators' element={<CCDashboard />} />
        <Route path='/creators/boost' element={<Boost />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/reset' element={<ResetPassword />} />

        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/success' element={<Success />} />

        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/collections' element={<ManageCollections />} />
        <Route path='/admin/requests' element={<ApproveRequests />} />



      </Routes>



    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

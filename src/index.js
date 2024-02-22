import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path='/developers' element={<Developer />} />
        <Route path='/developers/docs' element={<Docs />} />

        <Route path='/creators' element={<Creator />} />
        <Route path='/creators/boost' element={<Boost />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/success' element={<Success />} />

        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/collections' element={<AdminCollections />} />
        <Route path='/admin/contents' element={<AdminContents />} />



      </Routes>



    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

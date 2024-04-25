import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './pages/Detail';
import Home1 from './pages/Home1.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* strict mode api isterklerinin fazla fazla çalıştırabiliyor buna dikkat edilmesi gereklidir. */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

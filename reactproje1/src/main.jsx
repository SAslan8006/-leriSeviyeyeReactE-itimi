import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './pages/Detail';
import Home from './pages/Home.jsx';
import { Provider } from 'react-redux'
import { store } from './redux/store';

store
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* strict mode api isterklerinin fazla fazla çalıştırabiliyor buna dikkat edilmesi gereklidir. */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

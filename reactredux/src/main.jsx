import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
)


// Header her sayfada olacağı için buraya kaydedilir. Aynı sırada footer da kaydedilir.
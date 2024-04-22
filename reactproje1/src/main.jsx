import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* strict mode api isterklerinin fazla fazla çalıştırabiliyor buna dikkat edilmesi gereklidir. */}
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContatosContextProvider } from './contexts/ContatosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContatosContextProvider>
    <App />
  </ContatosContextProvider>
)

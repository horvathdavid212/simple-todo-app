import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { AppProviders } from './app/providers/AppProviders'
import './styles/variables.css'
import './styles/base.css'
import './styles/layout.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DashboardsContextProvider } from './contexts/DashboardsContext'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DashboardsContextProvider>
      <GlobalStyle />
      <App />
    </DashboardsContextProvider>
  </React.StrictMode>
)

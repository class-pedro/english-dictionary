import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { FontProvider } from './context/FontContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FontProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FontProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import.meta.env.VITE_SUPABASE_URL;
import.meta.env.VITE_SUPABASE_ANON_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

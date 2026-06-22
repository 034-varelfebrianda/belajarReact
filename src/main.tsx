import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DaftarSiswa from './App.tsx'
import TombolLikes from './fiturLike.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <DaftarSiswa/>
      <TombolLikes/>
  </StrictMode>
  )
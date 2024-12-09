import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentList from './components/test/StudentList.jsx'
import HeaderBar from './components/HeaderBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderBar />
  </StrictMode>,
)

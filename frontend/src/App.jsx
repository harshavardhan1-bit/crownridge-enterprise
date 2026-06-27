import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Workers from './pages/Workers'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'
import './App.css'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  if (!isAuthenticated) {
    return <LoginPage onLogin={(userData) => {
      setUser(userData)
      setIsAuthenticated(true)
    }} />
  }

  return (
    <Router>
      <div className="app-container">
        <Sidebar user={user} onLogout={() => {
          setIsAuthenticated(false)
          setUser(null)
        }} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

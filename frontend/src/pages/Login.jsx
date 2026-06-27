import React, { useState } from 'react'

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('superadmin@crownridge.com')
  const [password, setPassword] = useState('SuperAdmin@123456')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      const userData = {
        email,
        name: email.split('@')[0],
        role: 'super_admin',
        id: Math.random().toString(36).substr(2, 9),
      }
      localStorage.setItem('user', JSON.stringify(userData))
      onLogin(userData)
      setLoading(false)
    }, 500)
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>🏢 Crownridge Tracker</h1>
        <p style={styles.subtitle}>Enterprise Subcontractor Management</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" style={styles.btn} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={styles.testAccounts}>
          <h3>📋 Demo Accounts</h3>
          <p><strong>Super Admin:</strong> superadmin@crownridge.com</p>
          <p><strong>Admin:</strong> admin@crownridge.com</p>
          <p><strong>Worker:</strong> worker@crownridge.com</p>
          <p style={{fontSize: '0.85rem', marginTop: '0.5rem'}}>Password: Any password works in demo</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
  },
  loginBox: {
    background: 'white',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '450px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#1f2937',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '2rem',
  },
  form: {
    marginBottom: '2rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  btn: {
    width: '100%',
    padding: '0.75rem',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '1rem',
  },
  testAccounts: {
    background: '#f0f9ff',
    padding: '1rem',
    borderRadius: '8px',
    borderLeft: '4px solid #0284c7',
    fontSize: '0.9rem',
    color: '#0c4a6e',
  },
}

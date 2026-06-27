import React from 'react'

export default function Sidebar({ user, onLogout }) {
  const [active, setActive] = React.useState('/')

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/', key: 'dashboard' },
    { icon: '📁', label: 'Projects', path: '/projects', key: 'projects' },
    { icon: '👥', label: 'Workers', path: '/workers', key: 'workers' },
    { icon: '📈', label: 'Analytics', path: '/analytics', key: 'analytics' },
    { icon: '⚙️', label: 'Settings', path: '/settings', key: 'settings' },
  ]

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>🏢</div>
        <div>
          <div style={styles.logoText}>Crownridge</div>
          <div style={styles.logoSub}>Tracker</div>
        </div>
      </div>

      <nav style={styles.nav}>
        {menuItems.map(item => (
          <a
            key={item.key}
            href={item.path}
            onClick={(e) => { e.preventDefault(); setActive(item.path) }}
            style={{
              ...styles.navItem,
              ...(active === item.path ? styles.navItemActive : {})
            }}
          >
            <span style={styles.navIcon}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div style={styles.userSection}>
        <div style={styles.userAvatar}>{user?.name?.[0]?.toUpperCase()}</div>
        <div>
          <div style={styles.userName}>{user?.name}</div>
          <div style={styles.userRole}>{user?.role}</div>
        </div>
        <button onClick={onLogout} style={styles.logoutBtn}>🚪</button>
      </div>
    </div>
  )
}

const styles = {
  sidebar: {
    width: '250px',
    background: 'linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%)',
    color: 'white',
    padding: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '2rem',
    padding: '0 0.5rem',
  },
  logoIcon: { fontSize: '2rem' },
  logoText: { fontWeight: '700', fontSize: '1.1rem' },
  logoSub: { fontSize: '0.75rem', opacity: 0.8 },
  nav: { flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  navItemActive: {
    background: 'rgba(255,255,255,0.2)',
    color: 'white',
    borderLeft: '3px solid #f97316',
  },
  navIcon: { fontSize: '1.2rem', width: '30px' },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
    marginTop: 'auto',
  },
  userAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#f97316',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    flexShrink: 0,
  },
  userName: { fontSize: '0.9rem', fontWeight: '600' },
  userRole: { fontSize: '0.75rem', opacity: 0.8 },
  logoutBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginLeft: 'auto',
    padding: '0.5rem',
  },
}

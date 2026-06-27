export default function Settings({ user, setUser }) {
  return (
    <div>
      <h1 style={{fontSize: '2rem', color: '#1f2937', marginBottom: '2rem'}}>⚙️ Settings</h1>
      <div style={{background: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '600px'}}>
        <h2 style={{marginBottom: '1rem', color: '#1f2937'}}>Profile Information</h2>
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Email</label>
          <input type="email" value={user?.email} disabled style={{width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px'}} />
        </div>
        <div style={{marginBottom: '1rem'}}>
          <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Role</label>
          <input type="text" value={user?.role} disabled style={{width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px'}} />
        </div>
        <button style={{padding: '0.75rem 1.5rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer'}}>
          Logout
        </button>
      </div>
    </div>
  )
}

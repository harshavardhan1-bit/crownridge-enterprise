import React from 'react'

export default function Dashboard({ user }) {
  return (
    <div>
      <h1 style={styles.pageTitle}>📊 Dashboard</h1>
      <p style={styles.greeting}>Welcome, {user?.name}! 👋</p>

      <div style={styles.grid}>
        <StatCard label="Total Projects" value="12" icon="📁" color="#3b82f6" />
        <StatCard label="Active Projects" value="8" icon="🎯" color="#10b981" />
        <StatCard label="Total Workers" value="24" icon="👥" color="#f59e0b" />
        <StatCard label="Pending Approvals" value="5" icon="⏳" color="#ef4444" />
      </div>

      <div style={styles.grid}>
        <StatCard label="Total Payments" value="₹24.5L" icon="💰" color="#8b5cf6" />
        <StatCard label="Paid Amount" value="₹18.9L" icon="✅" color="#06b6d4" />
      </div>

      <ActivityTable />
    </div>
  )
}

function StatCard({ label, value, icon, color }) {
  return (
    <div style={{...styles.statCard, borderLeftColor: color}}>
      <div style={styles.statIcon}>{icon}</div>
      <div>
        <p style={styles.statLabel}>{label}</p>
        <p style={{...styles.statValue, color}}>{value}</p>
      </div>
    </div>
  )
}

function ActivityTable() {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>📈 Recent Activity</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.th}>Activity</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={styles.tableRow}>
            <td style={styles.td}>Road Construction marked 75% complete</td>
            <td style={styles.td}>Today</td>
            <td style={styles.td}><Badge color="#10b981">Completed</Badge></td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.td}>John assigned to new project</td>
            <td style={styles.td}>2 hours ago</td>
            <td style={styles.td}><Badge color="#3b82f6">Assigned</Badge></td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.td}>Payment milestone approved for ₹5L</td>
            <td style={styles.td}>Yesterday</td>
            <td style={styles.td}><Badge color="#10b981">Approved</Badge></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Badge({ color, children }) {
  return (
    <span style={{background: color + '20', color, padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '600'}}>
      {children}
    </span>
  )
}

const styles = {
  pageTitle: { fontSize: '2rem', marginBottom: '0.5rem', color: '#1f2937' },
  greeting: { color: '#6b7280', marginBottom: '2rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' },
  statCard: { background: 'white', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid', display: 'flex', gap: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' },
  statIcon: { fontSize: '2rem' },
  statLabel: { color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' },
  statValue: { fontSize: '1.5rem', fontWeight: '700' },
  card: { background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' },
  cardTitle: { fontSize: '1.25rem', marginBottom: '1rem', color: '#1f2937' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeader: { background: '#f9fafb', borderBottom: '2px solid #e5e7eb' },
  th: { padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' },
  tableRow: { borderBottom: '1px solid #e5e7eb' },
  td: { padding: '1rem', color: '#374151' },
}

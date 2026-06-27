import React, { useState } from 'react'

export default function Projects() {
  const [projects] = useState([
    { id: 1, name: 'Road Construction Phase 1', location: 'Mumbai', completion: 75, status: 'Active', budget: '₹50L' },
    { id: 2, name: 'Bridge Renovation', location: 'Pune', completion: 45, status: 'Active', budget: '₹75L' },
    { id: 3, name: 'Building Complex', location: 'Delhi', completion: 100, status: 'Completed', budget: '₹100L' },
    { id: 4, name: 'Highway Expansion', location: 'Bangalore', completion: 30, status: 'Active', budget: '₹120L' },
  ])

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <h1 style={{fontSize: '2rem', color: '#1f2937'}}>📁 Projects</h1>
        <button style={styles.btn}>+ New Project</button>
      </div>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Project Name</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Completion</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Budget</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p.id} style={styles.tableRow}>
                <td style={styles.td}><strong>{p.name}</strong></td>
                <td style={styles.td}>{p.location}</td>
                <td style={styles.td}>
                  <div style={styles.progressBar}>
                    <div style={{...styles.progressFill, width: `${p.completion}%`}} />
                  </div>
                  {p.completion}%
                </td>
                <td style={styles.td}><Badge status={p.status}>{p.status}</Badge></td>
                <td style={styles.td}>{p.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Badge({ status }) {
  const colors = {
    'Active': { bg: '#dcfce7', color: '#166534' },
    'Completed': { bg: '#dbeafe', color: '#1e40af' },
    'On Hold': { bg: '#fef3c7', color: '#92400e' },
  }
  const style = colors[status] || colors['Active']
  return <span style={{background: style.bg, color: style.color, padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '600'}}>{status}</span>
}

const styles = {
  card: { background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeader: { background: '#f9fafb', borderBottom: '2px solid #e5e7eb' },
  th: { padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' },
  tableRow: { borderBottom: '1px solid #e5e7eb' },
  td: { padding: '1rem', color: '#374151' },
  btn: { padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' },
  progressBar: { background: '#e5e7eb', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' },
  progressFill: { background: '#10b981', height: '100%', transition: 'width 0.3s' },
}

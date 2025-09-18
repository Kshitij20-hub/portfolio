import React from 'react';

const wrap = {
  background: 'linear-gradient(180deg,#eef4ff 0%, #ffffff 100%)',
  borderTop: '1px solid #e6ecff',
  borderBottom: '1px solid #e6ecff',
};
const container = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '24px 16px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gap: 16,
};
const card = {
  background: '#ffffff',
  border: '1px solid #e6ecff',
  borderRadius: 14,
  padding: '18px',
  textAlign: 'center',
  boxShadow: '0 6px 20px rgba(39,75,219,0.06)',
};
const big = { fontSize: 34, color: '#2563eb', fontWeight: 800, marginBottom: 6 };
const label = { color: '#4b5563', fontSize: 14 };

/* responsive tweak */
const media = `
@media (max-width: 960px){
  .stats-grid{ grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 560px){
  .stats-grid{ grid-template-columns: 1fr; }
}
`;

export default function StatsStrip() {
  return (
    <section id="stats" style={wrap}>
      <style>{media}</style>
      <div style={{ ...container }} className="stats-grid">
        <div style={card}>
          <div style={big}>6+</div>
          <div style={label}>Major Projects</div>
        </div>
        <div style={card}>
          <div style={big}>25%</div>
          <div style={label}>Max Efficiency Gain</div>
        </div>
        <div style={card}>
          <div style={big}>18%</div>
          <div style={label}>Fulfillment Improvement</div>
        </div>
        <div style={card}>
          <div style={big}>Merit</div>
          <div style={label}>MSc Grade</div>
        </div>
      </div>
    </section>
  );
}

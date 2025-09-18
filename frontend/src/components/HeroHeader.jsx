import React from 'react';

const wrapper = { padding: '48px 16px 24px', textAlign: 'center' };
const title   = { fontSize: '40px', lineHeight: 1.2, margin: '0 0 10px' };
const tag     = { maxWidth: 880, margin: '0 auto 18px', color: '#384454' };
const row     = { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' };
const btn     = { background:'#2563eb', color:'#fff', padding:'10px 14px', borderRadius:8, textDecoration:'none', border:'1px solid #1d4ed8' };
const btnO    = { padding:'10px 14px', borderRadius:8, textDecoration:'none', border:'1px solid #cbd5e1', color:'#0f172a', background:'#f8fafc' };

export default function HeroHeader() {
  return (
    <header style={wrapper}>
      <h1 style={title}>Kshitij Pandey</h1>
      <p style={tag}>
        Operations, Supply Chain & Engineering Management — hands-on project delivery (SAE BAJA, ESI, Mega ATV),
        and MSc dissertation on AI in Supply Chain Integration.
      </p>
      <div style={row}>
        <a href="mailto:kshitij.pandey@example.com" style={btn}>Email</a>
        <a href="https://www.linkedin.com/in/kshitij-pandey-20" target="_blank" rel="noopener" style={btnO}>LinkedIn</a>
        <a href="https://github.com/Kshitij20-hub" target="_blank" rel="noopener" style={btnO}>GitHub</a>
      </div>
    </header>
  );
}

import React from 'react';
import { MapPin, Mail, Github, ExternalLink } from 'lucide-react';

/* --- very small inline style system (keeps us to one file) --- */
const wrap = {
  background: 'linear-gradient(180deg,#f3f6fb 0%, #ffffff 100%)',
  padding: '28px 16px 36px',
  borderRadius: '12px',
  minHeight: '88vh',       // was 78vh
  display: 'grid',
  alignItems: 'center'     // vertically center content within the hero
};
const container = {
  maxWidth: 1100,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  gap: 28,
  alignItems: 'center',
};
const pill = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '6px 10px',
  borderRadius: 999,
  background: '#e7efff',
  color: '#1e3a8a',
  fontSize: 13,
  fontWeight: 600,
};
const h1 = {
  fontSize: '52px',
  lineHeight: 1.1,
  margin: '10px 0 8px',
  color: '#0b1b3a',
  fontWeight: 800,
};
const blueName = { color: '#274bdb' };
const sub = {
  fontSize: 18,
  color: '#45586f',
  margin: '6px 0 14px',
};
const body = {
  color: '#54667a',
  maxWidth: 560,
  marginBottom: 18,
};
const row = { display: 'flex', gap: 12, flexWrap: 'wrap' };
const btn = {
  background: '#2563eb',
  color: '#fff',
  padding: '12px 16px',
  borderRadius: 10,
  textDecoration: 'none',
  border: '1px solid #1d4ed8',
  fontWeight: 700,
};
const btnGhost = {
  background: '#f8fafc',
  color: '#0f172a',
  padding: '12px 16px',
  borderRadius: 10,
  textDecoration: 'none',
  border: '1px solid #cbd5e1',
  fontWeight: 700,
};
const iconRow = { display: 'flex', gap: 10, marginTop: 10 };
const iconBtn = {
  width: 40,
  height: 40,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  background: '#eef2ff',
  color: '#1e3a8a',
  border: '1px solid #d4defa',
  textDecoration: 'none',
};
const right = { display: 'grid', placeItems: 'center' };
const ring = {
  width: 420,
  height: 420,
  borderRadius: '50%',
  border: '14px solid #3b82f6',
  display: 'grid',
  placeItems: 'center',
  background:
    'radial-gradient(circle at 50% 50%, #ffffff 0%, #f3f6fb 70%, #eaf2ff 100%)',
};
const badge = { textAlign: 'center', color: '#0f172a' };
const badgeTitle = { fontWeight: 700, marginTop: 8 };
const badgeSub = { fontSize: 13, color: '#4b5563' };

/* responsive tweak */
const media = `
@media (max-width: 960px){
  .hero-grid{ grid-template-columns: 1fr; }
  .ring{ width: 320px; height: 320px; margin-top: 14px; }
  .hero-title{ font-size: 40px; }
}
`;

export default function HeroHeader() {
  return (
    <>
      {/* --- Top Nav --- */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          backdropFilter: 'saturate(160%) blur(6px)',
          background: 'rgba(255,255,255,0.85)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
          }}
        >
          <div style={{ fontWeight: 800, color: '#274bdb' }}>KP</div>
          <div
            style={{
              display: 'flex',
              gap: 22,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <a href="#/about" style={{ color: '#1f2937', textDecoration: 'none' }}>About</a>
            <a href="#/experience" style={{ color: '#1f2937', textDecoration: 'none' }}>Experience</a>
            <a href="#/projects" style={{ color: '#1f2937', textDecoration: 'none' }}>Projects</a>
            <a href="#/skills" style={{ color: '#1f2937', textDecoration: 'none' }}>Skills</a>
            <a href="#/testimonials" style={{ color: '#1f2937', textDecoration: 'none' }}>Testimonials</a>
            <a href="#/contact" style={{ color: '#1f2937', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section (existing) --- */}
      <section style={wrap}>
        <style>{media}</style>
        <div style={{ ...container }} className="hero-grid">
          {/* LEFT */}
          <div>
            <span style={pill}>
              <MapPin size={16} /> Oxford, United Kingdom
            </span>

            <h1 style={{ ...h1 }} className="hero-title">
              Hey, there <span role="img" aria-label="waving hand">👋</span>
              <br />
              I&apos;m <span style={blueName}>Kshitij Pandey</span>
            </h1>

            <p style={sub}>
              Operations &amp; Supply Chain Management | Process Improvement | AI-Aware Professional
            </p>

            <p style={body}>
              Operations and Supply Chain specialist with an AI-aware continuous
              improvement mindset. Experience across process optimisation,
              stakeholder communication and customer-facing roles in automotive and retail.
            </p>

            <div style={row}>
              <a href="#/contact" style={btn}>Get in Touch</a>
              <a href="#/projects" style={btnGhost}>
                View My Work <ExternalLink size={16} style={{ marginLeft: 6, verticalAlign: '-2px' }} />
              </a>
            </div>

            <div style={iconRow}>
              <a href="https://github.com/Kshitij20-hub" target="_blank" rel="noopener" style={iconBtn} title="GitHub">
                <Github size={18} />
              </a>
              <a href="mailto:kshitij.pandey@example.com" style={iconBtn} title="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div style={right}>
            <div className="ring" style={ring}>
              <div style={badge}>
                <div style={{ fontSize: 64 }}>🧑‍💼</div>
                <div style={badgeTitle}>Operations Expert</div>
                <div style={badgeSub}>Supply Chain &amp; Process Improvement</div>
              </div>
            </div>
          </div>
        </div>
          {/* Centered down arrow to next section */}
          <div style={{ display: 'grid', placeItems: 'center', marginTop: 18 }}>
            <button
              onClick={() => {
                const el = document.getElementById('stats');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              title="Scroll to statistics"
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                border: '2px solid #3b82f6',
                color: '#3b82f6',
                display: 'grid',
                placeItems: 'center',
                textDecoration: 'none',
                background: '#ffffffaa',
                boxShadow: '0 6px 18px rgba(39,75,219,0.12)'
              }}
            >
              ↓
            </a>
          </div>
      </section>
    </>
  );
}

import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';
import profileImg from './assets/profile.jpg'; // Recommended asset import for Vite
import logoImg from './assets/TrailByteLogo.png';

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="nav-container">
          {/*<a href="#home" className="logo">TrailByte Oy</a>*/}
          <a href="#home" className="logo-link">
            <img src={logoImg} alt="TrailByte Oy Logo" className="logo-img" />
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#certifications">Certifications</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="nav-btn">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="badge">Salesforce Consultancy</span>
            <h1>TrailByte Oy</h1>
            <h2>Salesforce Consulting & Digital Transformation</h2>
            <p>
              Helping enterprise businesses build scalable Salesforce solutions, 
              streamline complex CPQ architectures, and accelerate growth.
            </p>
            <div className="cta-group">
              <a 
                href="https://www.linkedin.com/in/modhurima-sil-a72630a0/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
              >
                LinkedIn Profile
              </a>
              <a 
                href="https://www.salesforce.com/trailblazer/profile" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary1"
              >
                Trailblazer Profile
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImg} alt="Modhurima Sil - Founder" className="profile" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About TrailByte</h2>
        <p className="lead-text">
          Hi, I'm <strong>Modhurima Sil</strong>, founder and principal consultant at TrailByte Oy.
        </p>
        <p>
          With over 8.5 years of hands-on experience in the Salesforce ecosystem, I specialize in 
          architecting and delivering enterprise solutions using Apex, Lightning Web Components (LWC), 
          Salesforce CPQ, Experience Cloud and API integrations. Based in Finland, TrailByte Oy 
          helps global organizations turn complex technical challenges into efficient business platforms.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-alt">
        <div className="section-container">
          <h2>Services</h2>
          <div className="cards">
            <div className="card">
              <div className="icon">⚡</div>
              <h3>Salesforce Development</h3>
              <p>Custom Apex development, Lightning Web Components (LWC), Flow automation, REST/SOAP APIs, and bespoke solution architecture.</p>
            </div>
            <div className="card">
              <div className="icon">⚙️</div>
              <h3>Salesforce CPQ</h3>
              <p>End-to-end Product Configuration, Price Rules, Advanced Approvals, and Quote-to-Cash optimization for enterprise teams.</p>
            </div>
            <div className="card">
              <div className="icon">🏛️</div>
              <h3>Architecture & Consulting</h3>
              <p>Technical design reviews, enterprise governance, system health checks, and best-practice guidance for scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <h2>Salesforce Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">🏆 Platform Developer II</div>
          <div className="cert-card">🏆 Platform Developer I</div>
          <div className="cert-card">🏆 Experience Cloud Consultant</div>
          <div className="cert-card">🏆 CPQ Specialist</div>
          <div className="cert-card">🏆 Platform App Builder</div>
          <div className="cert-card">🏆 Administrator</div>
          <div className="cert-card">🏆 JavaScript Developer I</div>
          <div className="cert-card">🏆 Agentforce Specialist</div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section bg-alt">
        <div className="section-container">
          <h2>Experience Highlights</h2>
          <ul className="timeline-list">
          <li><strong>Salesforce Developer at Zensar  :</strong> Led cross-functional teams delivering mission-critical CPQ features.</li>
            <li><strong>Salesforce Senior Consultant at Deloitte  :</strong> Led cross-functional teams delivering mission-critical CPQ features.</li>
            <li><strong>300+ Enterprise Stories Delivered:</strong> High quality execution across complex Apex, LWC, and integration environments.</li>
            <li><strong>Production Stabilization:</strong> Proven track record in resolving critical performance bottlenecks and architectural technical debt.</li>
            <li><strong>TrailByte Oy Founder:</strong> Providing tailored Salesforce expertise to European and international clients.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Let's Work Together</h2>
        <p>Available for consulting, architecture reviews, and long-term Salesforce advisory.</p>
        
        {/* Added mailto: right before the email address */}
        <a href="mailto:modhurima.sil94@gmail.com" className="btn btn-primary">
          Contact via Email
        </a>
        <p className="email-fallback">
          Or email directly: <strong>modhurima.sil94@gmail.com</strong>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} TrailByte Oy. All rights reserved.</p>
        <p className="footer-sub">Business ID (Y-tunnus): 3549452-2 | Helsinki, Finland</p>
      </footer>
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}

export default App;

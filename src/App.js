import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Test Sections */}
      <section id="home" style={{ minHeight: '100vh', background: '#e8f5e9', padding: '100px 20px' }}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">🏠 Home Section</h1>
          <p className="lead">Scroll aşağı yaparak navigation'ı test et!</p>
          <p className="text-muted">Mobil görünümde hamburger menüyü dene 📱</p>
        </div>
      </section>
      
      <section id="about" style={{ minHeight: '100vh', background: '#fff9c4', padding: '100px 20px' }}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">📖 About Section</h1>
          <p className="lead">Navigation linklere tıklayarak bölümler arası geç</p>
        </div>
      </section>
      
      <section id="products" style={{ minHeight: '100vh', background: '#ffccbc', padding: '100px 20px' }}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">🍔 Products Section</h1>
          <p className="lead">Tarayıcı penceresini küçült (mobil görünüm)</p>
        </div>
      </section>
      
      <section id="catalogue" style={{ minHeight: '100vh', background: '#c5cae9', padding: '100px 20px' }}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">📚 Catalogue Section</h1>
          <p className="lead">Hamburger menü otomatik kapanıyor mu?</p>
        </div>
      </section>
      
      <section id="contact" style={{ minHeight: '100vh', background: '#f8bbd0', padding: '100px 20px' }}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">📧 Contact Section</h1>
          <p className="lead">"Request a Quote" buraya scroll yapıyor</p>
        </div>
      </section>
      
      <section id="export" style={{ minHeight: '100vh', background: '#b2dfdb', padding: '100px 20px' }}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">🌍 Export Section</h1>
          <p className="lead">Navbar sticky - yukarıda kalıyor mu?</p>
        </div>
      </section>
    </div>
  );
}

export default App;
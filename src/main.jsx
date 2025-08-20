import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </App>
  </StrictMode>,
);

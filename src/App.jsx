import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects.html" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles.html" element={<Articles />} />
            <Route path="/zyphuel" element={<Articles />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services.html" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

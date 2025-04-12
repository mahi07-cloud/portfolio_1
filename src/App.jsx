import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Modal from './components/Modal';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <Hero />
      <About />
      <Projects setModalData={setModalData} />
      <Skills />
      <Contact />
      {modalData && <Modal modalData={modalData} setModalData={setModalData} />}
    </>
  );
}

export default App;
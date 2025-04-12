import { useEffect, useState } from 'react';

function Hero() {
  const [name, setName] = useState('');
  const nameText = 'ESLAVATH MAHENDAR';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < nameText.length) {
        setName(nameText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">{name || '|'}</span></h1>
        <p className="tagline">A Passionate Web Developer</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
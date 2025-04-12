import { useEffect, useRef, useMemo } from 'react';

function Skills() {
  const skills = useMemo(() => [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
  ], []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.progress-fill').forEach((bar, i) => {
            bar.style.width = `${skills[i].level}%`;
          });
        }
      },
      { threshold: 0.2 }
    );
    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, [skills]);

  return (
    <section id="skills" className="skills-section section" ref={sectionRef}>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: 0 }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
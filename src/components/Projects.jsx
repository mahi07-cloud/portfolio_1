function Projects({ setModalData }) {
    const projects = [
      { title: 'PERSONAL_DIARY', image: '/project1.jpg', description: 'A secure and user-friendly digital diary application that allows users to create, manage, and organize their personal entries online.' },
      { title: 'COLOURFUL_TODO', image: '/project2.jpg', description: 'An interactive and visually appealing to-do list web app designed to boost productivity with a touch of fun — featuring customizable colors, relaxing background music, and seamless light/dark mode switching.' },
    ];
  
    return (
      <section id="projects" className="projects-section section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => setModalData(project)}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
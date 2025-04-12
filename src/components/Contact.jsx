import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      emailjs
        .send(
          'service_te2w9st',         
          'template_umdntls',       
          formData,                 
          '0P-PY-CGQnmclhJ1d'         )
        .then(() => {
          setSuccess(true);
          setError(false);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((err) => {
          console.error('Failed to send message:', err);
          setError(true);
          setSuccess(false);
        });
    } else {
      setError(true);
      setSuccess(false);
    }

    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
        <p className={`success ${success ? 'active' : ''}`}>Message sent successfully!</p>
        <p className={`error ${error ? 'active' : ''}`}>Please fill all fields correctly or try again.</p>
      </form>

      <div className="social-links">
        <a href="https://github.com/mahi07-cloud" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mahendarrr/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Mahende01300866" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
